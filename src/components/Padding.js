const Padding = ({ TRBL, child }) => {
    return (
        <div style={{
            padding: TRBL,
        }}>{child}</div>
    );
}

export default Padding;