import FooterHeading from "../../components/FooterHeading";
import FooterLinks from "../../components/FooterLinks";
import FooterResources from "../../components/FooterResources";
import FooterSocials from "../../components/FooterSocials";

function Footer(){
  return (
    <footer className='w-full bg-[#19192c] text-white p-4 flex flex-col gap-8'>
      <FooterHeading />
      <FooterLinks />
      <FooterResources />
      <FooterSocials />
    </footer>
  )
}

export default Footer;