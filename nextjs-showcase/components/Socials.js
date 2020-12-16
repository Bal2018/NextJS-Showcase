
import {SocialsItem} from "./SocialbarItem";

export const Socials = ({pages}) => {

    return (
        <div className="Socials">
                    {pages.map((page) => (
                    <SocialsItem key={page.link} label={page.label} path={page.link} />
                    ))}
        </div>
    );
}
