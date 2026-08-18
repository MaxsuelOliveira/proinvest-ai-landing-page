import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Bot, 
  Zap, 
  Brain, 
  Cpu, 
  BarChart3, 
  Shield, 
  Clock, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Sparkles,
  TrendingUp,
  Target,
  Rocket,
  Star,
  Play
} from 'lucide-react';

const Home = () => {
  const stats = [
    { number: '500+', label: 'Automações Criadas', icon: Bot },
    { number: '98%', label: 'Taxa de Sucesso', icon: TrendingUp },
    { number: '150+', label: 'Empresas Atendidas', icon: Users },
    { number: '24/7', label: 'Suporte Contínuo', icon: Clock },
  ];

  const services = [
    {
      icon: Bot,
      title: 'Chatbots Inteligentes',
      description: 'Assistentes virtuais com IA que revolucionam o atendimento ao cliente.',
      features: ['Processamento de linguagem natural', 'Integração multicanal', 'Aprendizado contínuo']
    },
    {
      icon: Brain,
      title: 'Análise Preditiva',
      description: 'Antecipe tendências e tome decisões baseadas em dados inteligentes.',
      features: ['Machine Learning avançado', 'Previsões precisas', 'Insights acionáveis']
    },
    {
      icon: Zap,
      title: 'Automação de Processos',
      description: 'Elimine tarefas repetitivas e otimize fluxos de trabalho complexos.',
      features: ['RPA inteligente', 'Integração de sistemas', 'Monitoramento em tempo real']
    },
    {
      icon: BarChart3,
      title: 'Business Intelligence',
      description: 'Dashboards inteligentes que transformam dados em decisões estratégicas.',
      features: ['Visualizações interativas', 'Relatórios automatizados', 'KPIs personalizados']
    },
    {
      icon: Cpu,
      title: 'Processamento de Dados',
      description: 'Processe grandes volumes de dados com velocidade e precisão.',
      features: ['Big Data Analytics', 'Processamento em tempo real', 'APIs robustas']
    },
    {
      icon: Shield,
      title: 'IA Segura e Confiável',
      description: 'Soluções com os mais altos padrões de segurança e privacidade.',
      features: ['Criptografia avançada', 'Compliance LGPD', 'Auditoria completa']
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: 'Precisão Incomparável',
      description: 'Algoritmos de IA que garantem 99.9% de precisão em automações críticas.'
    },
    {
      icon: Rocket,
      title: 'Implementação Rápida',
      description: 'Do planejamento à produção em apenas 2-4 semanas com nossa metodologia ágil.'
    },
    {
      icon: TrendingUp,
      title: 'ROI Comprovado',
      description: 'Nossos clientes observam em média 300% de retorno sobre investimento.'
    }
  ];

  const testimonials = [
    {
      name: 'Maria Silva',
      role: 'CEO, TechCorp',
      content: 'A ProInvest transformou completamente nossos processos. Reduzimos 80% do tempo em tarefas manuais.',
      rating: 5
    },
    {
      name: 'João Santos',
      role: 'CTO, InnovaTech',
      content: 'Implementação perfeita e suporte excepcional. Nossa produtividade aumentou 250%.',
      rating: 5
    },
    {
      name: 'Ana Costa',
      role: 'Diretora de Operações, FutureCorp',
      content: 'Os chatbots da ProInvest revolucionaram nosso atendimento. Satisfação do cliente subiu para 98%.',
      rating: 5
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-blue-500/10 animate-pulse" />
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
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
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-primary-500/20 backdrop-blur-sm border border-primary-500/30 rounded-full px-6 py-3 text-primary-300"
            >
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-medium">Líder em Automações com IA no Brasil</span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-5xl md:text-7xl font-bold text-white leading-tight"
              >
                O Futuro da
                <br />
                <span className="gradient-text">Automação com IA</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              >
                Transforme seu negócio com soluções de inteligência artificial que automatizam processos, 
                aumentam a produtividade e impulsionam o crescimento.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <Link
                to="/contato"
                className="group relative px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-xl hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-2xl hover:shadow-primary-500/25 transform hover:-translate-y-1"
              >
                <span className="flex items-center space-x-2">
                  <Rocket className="w-5 h-5" />
                  <span>Começar Agora</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <button className="group flex items-center space-x-3 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-primary-500 transition-colors">
                  <Play className="w-5 h-5 ml-1" />
                </div>
                <span>Ver Demo</span>
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="text-center space-y-2"
                >
                  <div className="flex justify-center">
                    <stat.icon className="w-8 h-8 text-primary-400" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center space-y-16"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-dark-800">
                Soluções de IA que
                <span className="gradient-text"> Transformam Negócios</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Descubra como nossas tecnologias de inteligência artificial podem revolucionar 
                seus processos e impulsionar o crescimento da sua empresa.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-200"
                >
                  <div className="space-y-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-dark-800 group-hover:text-primary-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-primary-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      to="/servicos"
                      className="inline-flex items-center space-x-2 text-primary-600 font-medium hover:text-primary-700 transition-colors group"
                    >
                      <span>Saiba mais</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-dark-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-blue-500/10" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-16"
          >
            <motion.div variants={itemVariants} className="text-center space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Por que Escolher a
                <span className="gradient-text"> ProInvest?</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Somos pioneiros em automações com IA no Brasil, com resultados comprovados 
                e tecnologia de ponta que garante o sucesso do seu projeto.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div variants={itemVariants} className="space-y-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="flex space-x-6 group"
                  >
                    <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500 transition-colors duration-300">
                      <benefit.icon className="w-6 h-6 text-primary-400 group-hover:text-white transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-white">{benefit.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="relative"
              >
                <div className="bg-gradient-to-r from-primary-500/20 to-blue-500/20 rounded-2xl p-8 backdrop-blur-sm border border-primary-500/30">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center space-y-2">
                      <div className="text-4xl font-bold text-white">300%</div>
                      <div className="text-primary-400 text-sm">ROI Médio</div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-4xl font-bold text-white">2-4</div>
                      <div className="text-primary-400 text-sm">Semanas para Deploy</div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-4xl font-bold text-white">99.9%</div>
                      <div className="text-primary-400 text-sm">Uptime Garantido</div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-4xl font-bold text-white">24/7</div>
                      <div className="text-primary-400 text-sm">Suporte Técnico</div>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 w-20 h-20 bg-primary-500/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                >
                  <Bot className="w-10 h-10 text-primary-400" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-16"
          >
            <motion.div variants={itemVariants} className="text-center space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-dark-800">
                O que Nossos
                <span className="gradient-text"> Clientes Dizem</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Histórias reais de transformação digital e sucesso empresarial.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="space-y-6">
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    <p className="text-gray-600 leading-relaxed italic">
                      "{testimonial.content}"
                    </p>

                    <div className="border-t pt-6">
                      <div className="font-semibold text-dark-800">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary-600 to-primary-700 relative overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 1, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Pronto para Transformar
              <br />
              Seu Negócio com IA?
            </h2>
            
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Agende uma consultoria gratuita e descubra como nossas soluções de IA 
              podem revolucionar seus processos e impulsionar seu crescimento.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                to="/contato"
                className="group px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <span className="flex items-center space-x-2">
                  <span>Agendar Consultoria Gratuita</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <Link
                to="/servicos"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-primary-600 transition-all duration-300"
              >
                Ver Todos os Serviços
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;