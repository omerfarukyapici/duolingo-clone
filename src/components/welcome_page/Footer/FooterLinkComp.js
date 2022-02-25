export const FooterLinkComp = ({
    linkStyle,
    linkAddress,
    linkName,
    normalContent,
    listStyle
}) => {
    return(
        <li className={listStyle}>
            {normalContent}
            <a className={linkStyle} href={linkAddress}>{linkName}</a>
        </li>
    );
}