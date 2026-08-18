import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Send,
  CheckCircle,
  Zap,
  Users,
  Award,
  ArrowRight
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        budget: '',
        message: ''
      });
    }, 3000);
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Telefone',
      value: '(11) 3456-7890',
      description: 'Seg - Sex, 8h às 18h',
      action: 'tel:+551134567890'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'contato@proinvest.com.br',
      description: 'Resposta em até 2 horas',
      action: 'mailto:contato@proinvest.com.br'
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp',
      value: '(11) 99999-9999',
      description: 'Atendimento instantâneo',
      action: 'https://wa.me/5511999999999'
    },
    {
      icon: MapPin,
      title: 'Endereço',
      value: 'Av. Paulista, 1000',
      description: 'São Paulo, SP - Brasil',
      action: '#'
    }
  ];

  const services = [
    'Chatbots Inteligentes',
    'Análise Preditiva',
    'Automação de Processos (RPA)',
    'Business Intelligence com IA',
    'Processamento de Dados',
    'IA Segura e Compliance',
    'Consultoria em IA',
    'Outros'
  ];

  const budgetRanges = [
    'Até R$ 10.000',
    'R$ 10.000 - R$ 50.000',
    'R$ 50.000 - R$ 100.000',
    'R$ 100.000 - R$ 500.000',
    'Acima de R$ 500.000',
    'Prefiro não informar'
  ];

  const faqs = [
    {
      question: 'Qual o prazo médio para implementação?',
      answer: 'Nossos projetos são implementados entre 2 a 8 semanas, dependendo da complexidade. Projetos simples como chatbots podem estar prontos em 2 semanas, enquanto soluções mais complexas podem levar até 8 semanas.'
    },
    {
      question: 'Vocês oferecem suporte pós-implementação?',
      answer: 'Sim! Oferecemos suporte técnico 24/7, monitoramento contínuo, atualizações regulares e otimizações baseadas em performance. Nosso time está sempre disponível para garantir o sucesso da sua solução.'
    },
    {
      question: 'Como é calculado o investimento?',
      answer: 'O investimento é baseado na complexidade da solução, tecnologias utilizadas, volume de dados e nível de personalização. Oferecemos propostas transparentes e detalhadas sem compromisso.'
    },
    {
      question: 'Trabalham com empresas de que tamanho?',
      answer: 'Atendemos desde startups até grandes corporações. Nossas soluções são escaláveis e adaptáveis para qualquer porte de empresa, sempre respeitando o orçamento e necessidades específicas.'
    },
    {
      question: 'As soluções são seguras e conformes com LGPD?',
      answer: 'Absolutamente! Todas nossas soluções seguem os mais rigorosos padrões de segurança e são 100% conformes com LGPD, GDPR e outras regulamentações de proteção de dados.'
    },
    {
      question: 'Oferecem treinamento para nossa equipe?',
      answer: 'Sim! Incluímos treinamento completo da equipe, documentação detalhada e workshops práticos para garantir que todos saibam utilizar as novas soluções de forma eficiente.'
    }
  ];

  const stats = [
    { number: '< 2h', label: 'Tempo de Resposta', icon: Clock },
    { number: '98%', label: 'Satisfação do Cliente', icon: Award },
    { number: '24/7', label: 'Suporte Disponível', icon: Users },
    { number: '500+', label: 'Projetos Entregues', icon: Zap },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 relative overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Vamos
              <span className="gradient-text"> Conversar?</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Estamos prontos para transformar seu negócio com IA. Agende uma consultoria 
              gratuita e descubra como podemos impulsionar seu crescimento.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center space-y-4"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mx-auto">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-dark-800">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-dark-800">
                  Entre em
                  <span className="gradient-text"> Contato</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Nossa equipe de especialistas está pronta para entender suas necessidades 
                  e propor soluções personalizadas que transformarão seu negócio.
                </p>
              </div>

              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={method.title}
                    href={method.action}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="flex items-center space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="w-14 h-14 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <method.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-dark-800 group-hover:text-primary-600 transition-colors">
                        {method.title}
                      </h3>
                      <p className="text-primary-600 font-medium">{method.value}</p>
                      <p className="text-gray-500 text-sm">{method.description}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" />
                  </motion.a>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-primary-500/10 to-blue-500/10 rounded-2xl p-6 border border-primary-200"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Zap className="w-6 h-6 text-primary-600" />
                  <h3 className="text-lg font-semibold text-dark-800">Resposta Rápida</h3>
                </div>
                <p className="text-gray-600">
                  Garantimos resposta em até 2 horas durante horário comercial. 
                  Para urgências, entre em contato via WhatsApp.
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
            >
              <div className="space-y-6">
                <div className="text-center space-y-3">
                  <h3 className="text-2xl font-bold text-dark-800">Solicite uma Consultoria Gratuita</h3>
                  <p className="text-gray-600">
                    Preencha o formulário e nossa equipe entrará em contato em até 2 horas.
                  </p>
                </div>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center space-y-6 py-12"
                  >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-xl font-bold text-dark-800">Mensagem Enviada!</h4>
                      <p className="text-gray-600">
                        Recebemos sua solicitação e entraremos em contato em breve.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-dark-700 mb-2">
                          Nome Completo *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                          placeholder="Seu nome completo"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-dark-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                          placeholder="seu@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-dark-700 mb-2">
                          Empresa
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                          placeholder="Nome da sua empresa"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-dark-700 mb-2">
                          Telefone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                          placeholder="(11) 99999-9999"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-dark-700 mb-2">
                          Serviço de Interesse
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                        >
                          <option value="">Selecione um serviço</option>
                          {services.map((service) => (
                            <option key={service} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="budget" className="block text-sm font-medium text-dark-700 mb-2">
                          Orçamento Estimado
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                        >
                          <option value="">Selecione uma faixa</option>
                          {budgetRanges.map((range) => (
                            <option key={range} value={range}>
                              {range}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-dark-700 mb-2">
                        Mensagem *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                        placeholder="Conte-nos sobre seu projeto e como podemos ajudar..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-xl hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span className="flex items-center justify-center space-x-2">
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            <span>Enviando...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            <span>Enviar Mensagem</span>
                          </>
                        )}
                      </span>
                    </motion.button>

                    <p className="text-center text-sm text-gray-500">
                      * Campos obrigatórios. Seus dados são tratados com total segurança e privacidade.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileIn View={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-6 mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Perguntas
              <span className="gradient-text"> Frequentes</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Respostas para as dúvidas mais comuns sobre nossos serviços de IA.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white mb-4">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-dark-800">
                  Nossa
                  <span className="gradient-text"> Localização</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Venha nos visitar em nosso escritório no coração de São Paulo, 
                  ou agende uma reunião online para conhecer nossas soluções.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 space-y-6">
                <h3 className="text-xl font-semibold text-dark-800">ProInvest - Automações com IA</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700">
                        Av. Paulista, 1000 - 15º andar<br />
                        Bela Vista, São Paulo - SP<br />
                        CEP: 01310-100
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700">
                        <strong>Horário de Funcionamento:</strong><br />
                        Segunda a Sexta: 8h às 18h<br />
                        Sábado: 9h às 13h<br />
                        Domingo: Fechado
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-r from-primary-500/10 to-blue-500/10 rounded-2xl p-12 text-center border-2 border-dashed border-primary-300">
                <div className="space-y-6">
                  <div className="text-6xl">📍</div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-dark-800">Mapa Interativo</h3>
                    <p className="text-gray-600">Av. Paulista, 1000 - São Paulo, SP</p>
                  </div>
                  <button className="px-6 py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-colors">
                    Ver no Google Maps
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;