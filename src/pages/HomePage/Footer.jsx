import FooterHeading from "../../components/FooterHeading";
import FooterLinks from "../../components/FooterLinks";
import FooterResources from "../../components/FooterResources";
import FooterSocials from "../../components/FooterSocials";
import FooterLicense from "../../components/FooterLicense";

function Footer(){
  return (
    <footer className='w-full bg-[#19192c] text-white p-4 flex flex-col gap-8'>

      <article className="gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

        <FooterHeading />
        <FooterLinks />
        <FooterResources />
        <FooterSocials />

      </article>

      <div className="w-full h-[1px] bg-gray-500"></div>

      <FooterLicense />

    </footer>
  )
}

export default Footer;