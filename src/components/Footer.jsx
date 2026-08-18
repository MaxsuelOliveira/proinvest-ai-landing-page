import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Bot, Mail, Phone, MapPin, Linkedin, Twitter, Facebook, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerSections = [
    {
      title: 'Empresa',
      links: [
        { label: 'Sobre Nós', path: '/sobre' },
        { label: 'Nossos Serviços', path: '/servicos' },
        { label: 'Carreiras', path: '#' },
        { label: 'Imprensa', path: '#' },
      ]
    },
    {
      title: 'Soluções',
      links: [
        { label: 'Automação com IA', path: '/servicos' },
        { label: 'Chatbots Inteligentes', path: '/servicos' },
        { label: 'Análise Preditiva', path: '/servicos' },
        { label: 'Processamento de Dados', path: '/servicos' },
      ]
    },
    {
      title: 'Recursos',
      links: [
        { label: 'Documentação', path: '#' },
        { label: 'API', path: '#' },
        { label: 'Suporte', path: '/contato' },
        { label: 'Status do Sistema', path: '#' },
      ]
    },
    {
      title: 'Contato',
      links: [
        { label: 'Fale Conosco', path: '/contato' },
        { label: 'Suporte Técnico', path: '/contato' },
        { label: 'Parcerias', path: '#' },
        { label: 'Consultoria', path: '/contato' },
      ]
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
  ];

  return (
    <footer className="bg-dark-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <Link to="/" className="flex items-center space-x-3 group">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                      <Bot className="w-7 h-7 text-white" />
                    </div>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full"
                    />
                  </motion.div>
                  <span className="text-2xl font-bold group-hover:text-primary-400 transition-colors">
                    ProInvest
                  </span>
                </Link>

                <p className="text-gray-300 leading-relaxed">
                  Transformamos negócios com automações inteligentes e soluções de IA de ponta. 
                  Sua jornada para o futuro digital começa aqui.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Mail className="w-5 h-5 text-primary-400" />
                    <span>contato@proinvest.com.br</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Phone className="w-5 h-5 text-primary-400" />
                    <span>(11) 3456-7890</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <MapPin className="w-5 h-5 text-primary-400" />
                    <span>São Paulo, SP - Brasil</span>
                  </div>
                </div>

                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-dark-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-600 transition-all duration-300"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: sectionIndex * 0.1 }}
                className="space-y-4"
              >
                <h4 className="text-lg font-semibold text-white">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <motion.li
                      key={link.label}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (sectionIndex * 0.1) + (linkIndex * 0.05) }}
                    >
                      <Link
                        to={link.path}
                        className="text-gray-300 hover:text-primary-400 transition-colors duration-300 block"
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dark-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-gray-400 text-sm"
              >
                © 2024 ProInvest. Todos os direitos reservados.
              </motion.p>

              <div className="flex items-center space-x-6">
                <Link
                  to="#"
                  className="text-gray-400 hover:text-primary-400 text-sm transition-colors"
                >
                  Termos de Uso
                </Link>
                <Link
                  to="#"
                  className="text-gray-400 hover:text-primary-400 text-sm transition-colors"
                >
                  Política de Privacidade
                </Link>
                <motion.button
                  onClick={scrollToTop}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center text-white hover:bg-primary-700 transition-all duration-300"
                  aria-label="Voltar ao topo"
                >
                  <ArrowUp className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;