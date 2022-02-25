import { FeatureCard } from "./FeatureCard";
import { Header2 } from "./StandardComponents";

export const ExpansionCard = ({ title, items }) => {
    return (
        <>
            <Header2>{title}</Header2>
            {items.map((item, index) => {
                return (
                    <FeatureCard
                        key={index}
                        image={item.image}
                        alt={item.alt}
                        title={item.title}
                        detail={item.detail}
                    />
                );
            })}
        </>
    );
};