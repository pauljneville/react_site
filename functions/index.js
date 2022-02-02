const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const axios = require('axios');
const crypto = require('crypto');

const admin = require("firebase-admin");
admin.initializeApp();

const app = express();

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));
// const cors = require('cors')({ origin: true });

const bearerName = 'projects/porfolio-518b1/secrets/timetap-bearer';
const bearerLatest =
    'projects/porfolio-518b1/secrets/timetap-bearer/versions/latest';
const apiKeyLatest =
    'projects/porfolio-518b1/secrets/timetap-api-key/versions/latest';
const privateKeyLatest =
    'projects/porfolio-518b1/secrets/timetap-private-key/versions/latest';

// Imports the Secret Manager library
const { SecretManagerServiceClient } = require('@google-cloud/secret-manager');
// const { resolveSoa } = require("dns");

// Instantiates a client
const client = new SecretManagerServiceClient();

/** Updates the bearer secret in GC secret manager
 *  @param {string} payload - the bearer token
 */
async function updateBearer(payload) {
    functions.logger.info("bearerUpdating: " + payload);
    await client.addSecretVersion({
        parent: bearerName,
        payload: {
            data: Buffer.from(payload, 'utf8'),
        },
    });
}

/** Accesses the api key secret in GC secret manager */
async function accessApiKey() {
    const [version] = await client.accessSecretVersion({
        name: apiKeyLatest,
    });
    if (version.payload == null || version.payload.data == null) {
        functions.logger.info("accessApiKey payload empty: ");
        return "";
    }
    const payload = version.payload.data.toString();
    functions.logger.info("accessApiKey: " + payload);
    return payload;
}
/** Accesses the bearer secret in GC secret manager */
async function accessBearer() {
    const [version] = await client.accessSecretVersion({
        name: bearerLatest,
    });
    if (version.payload == null || version.payload.data == null) {
        functions.logger.info("bearer payload empty: ");
        return "";
    }
    const payload = version.payload.data.toString();
    functions.logger.info("bearer: " + payload);
    return payload;
}
/** Accesses the private key secret in GC secret manager */
async function accessPrivateKey() {
    const [version] = await client.accessSecretVersion({
        name: privateKeyLatest,
    });
    if (version.payload == null || version.payload.data == null) {
        functions.logger.info("accessPrivateKey payload empty: ");
        return "";
    }
    const payload = version.payload.data.toString();
    functions.logger.info("accessPrivateKey: " + payload);
    return payload;
}

// exports.helloWorld = functions.https.onRequest((request, response) => {
//     functions.logger.info("Hello logs!", { structuredData: true });
//     response.send("Hello from Firebase!");
// });

/** Requests Kiama id 492002 location data from timetap API */
app.get('/', async (req, res) => {
    cors(req, res, async () => {
        const bearer = await accessBearer();
        functions.logger.info("here after bearer: " + bearer);

        const config = {
            headers: {
                'Authorization': 'Bearer ' + bearer,
            },
        };

        axios.get(
            'https://api.timetap.com/live/locations/492002',
            config,
        )
            .then(async (response) => {
                functions.logger.info("1st response.status: " +
                    response.status);

                try {
                    functions.logger.info("stringify response: " +
                        JSON.stringify(response.data, null, 2));
                    res.status(200).send(JSON.stringify(response.data));
                } catch (error) {
                    functions.logger.info("error in stringify: " + error);
                    res.status(500).send("JSON error");
                }
            })
            .catch((error) => {
                functions.logger.info("1st response.status: " +
                    error.response.status);
                res.status(401).send("Unauthorized 1st time");
            });
    });
});

/** Updates session token from timetap API */
app.get('/bearer', async (req, res) => {
    const apiKey = await accessApiKey();
    const privateKey = await accessPrivateKey();
    functions.logger.info("apiKey: " + apiKey);
    functions.logger.info("privateKey: " + privateKey);

    const hash = crypto.createHash('md5')
        .update(apiKey + privateKey)
        .digest('hex');
    const timestamp = Date.now();
    functions.logger.info("timestamp: " + timestamp);
    let bearer = "";

    axios.get(
        `https://api.timetap.com/live/sessionToken?apiKey=${apiKey}&timestamp=${timestamp}&signature=${hash}`,
    )
        .then((response) => {
            updateBearer(response.data.sessionToken);
            bearer = response.data.sessionToken;
            functions.logger.info("bearer: " + bearer);
            functions.logger.info("data: ",
                { sessionToken: response },
            );
            functions.logger.info("response: ",
                { sessionToken: response.data.sessionToken },
            );
            res.status(200).send(JSON.stringify(response.data));
        })
        .catch((error) => {
            functions.logger.info("axios.get bearer error: ");
            res.status(401).send("Unauthorized 2nd time");
        });
});

// app.post('/', async (req, res) => {
//     const user = req.body;
//     functions.logger.info("name: ", user.name);
//     functions.logger.info("phrase: ", user.phrase);
//     functions.logger.info("email: ", user.email);
//     if (user.name == null ||
//         user.phrase == null ||
//         user.email == null) {
//         res.status(422).send();
//         return;
//     }

//     await admin.firestore().collection('tester').doc().set(
//         {
//             name: user.name,
//             phrase: user.phrase,
//             email: user.email,
//         });

//     res.status(201).send();
// });

exports.userTester = functions.https.onRequest(app);

exports.timetapLocation = functions.https.onRequest((req, res) => {
    // exports.helloWorld = function helloWorld(req, res) {  
    //     res.set('Access-Control-Allow-Origin', "*")
    //     res.set('Access-Control-Allow-Methods', 'GET, POST');

    //     if (req.method === "OPTIONS") {
    //       // stop preflight requests here
    //       res.status(204).send('');
    //       return;
    //     }

    //     // handle full requests
    //     res.status(200).send('weeee!);
    //   };

    /**
 * HTTP function that supports CORS requests.
 *
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */
    /*exports.corsEnabledFunction = (req, res) => {
        // Set CORS headers for preflight requests
        // Allows GETs from any origin with the Content-Type header
        // and caches preflight response for 3600s

        res.set('Access-Control-Allow-Origin', '*');

        if (req.method === 'OPTIONS') {
            // Send response to OPTIONS requests
            res.set('Access-Control-Allow-Methods', 'GET');
            res.set('Access-Control-Allow-Headers', 'Content-Type');
            res.set('Access-Control-Max-Age', '3600');
            res.status(204).send('');
        } else {
            res.send('Hello World!');
        }
    };*/

    res.set('Access-Control-Allow-Origin', "*");
    res.set('Access-Control-Allow-Methods', 'GET, POST');
    // const original = req.query.text;
    // const writeResult = await admin.firestore().collection('messages')
    // .add({ original: original });
    // const bearer = await accessBearer();

    // res.status(200).send("I can't find them!");
    // JSON.stringify(bearer));
    // .json({ result: `Message with ID: ${original} added. ${bearer}` });
    const options = {
        origin: 'https://paulneville.com.au',
    };
    cors(options)(req, res, () => {
        return res.json({ status: 'ok' });
    });
});

// exports.addMessage = functions.https.onRequest(async (req, res) => {
//     res.set('Access-Control-Allow-Origin', '*');

//     if (req.method === 'OPTIONS') {
//         res.set('Access-Control-Allow-Methods', 'GET');
//         res.set('Access-Control-Max-Age', '3600');
//         res.status(204).send('');
//     } else {
//         res.json({ status: 'ok' });
//     }
// });
