const Footer = () => {
    const year = new Date();
    const currentYear = year.getFullYear();

    return (
        <footer>&#169; {`${currentYear} #VANLIFE`}</footer>
    );
}
 
export default Footer;