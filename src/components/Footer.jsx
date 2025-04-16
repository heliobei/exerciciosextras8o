import { FaYoutube, FaFacebookF, FaInstagram } from "react-icons/fa";
import logo from '/assets/images/logo_white.png';

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#0592D3] to-[#05d354]  min-h-[240px] flex flex-col md:flex-row items-center justify-between px-6 py-8 gap-6 md:gap-0 md:py-6">
      {/* Logo */}
      <div className="order-1 md:order-1">
        <a href="http://www.beieducacao.com.br" target="_blank" rel="noopener noreferrer">
          <img src={logo} alt="Logo BEĨ" width={60} height={60} />
        </a>
      </div>

      {/* Social Icons */}
      <div className="flex gap-6 order-2 md:order-3">
        <a
          href="https://www.youtube.com/channel/UCRk-HV6uJQoZ3RFY9rcyFXw"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-110 hover:text-yellow-300 text-white"
        >
          <FaYoutube size={24} />
        </a>
        <a
          href="https://www.facebook.com/beieducacao"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-110 hover:text-yellow-300 text-white"
        >
          <FaFacebookF size={24} />
        </a>
        <a
          href="https://www.instagram.com/beieducacao/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-110 hover:text-yellow-300 text-white"
        >
          <FaInstagram size={24} />
        </a>
      </div>

      {/* Texts */}
      <div className="text-center order-3 md:order-2 w-full md:w-auto md:self-end">
        <p className="text-white font-bold uppercase tracking-[0.5em] mb-4 md:pb-12">Conteúdo com propósito</p>
        <p className="text-slate-200 text-sm">2025 © Todos os direitos reservados</p>
      </div>
    </footer>
  );
}

export default Footer;
