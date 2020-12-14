
export const NavbarItem = ({label, path}) => {
    let isExternal = path.indexOf("://") > -1 && ["https","http","ftp","ftps","sftp"].indexOf(path.split('://')[0]) > -1;
    return (
        <li>
            <a href={path} rel={isExternal ? 'noopener' : ''} target={isExternal ? '_blank' : ''}>{label}</a>
        </li>
    )
};