import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Bot, 
  Brain, 
  Zap, 
  BarChart3, 
  Cpu, 
  Shield, 
  CheckCircle, 
  ArrowRight,
  MessageSquare,
  TrendingUp,
  Cog,
  Database,
  Lock,
  Clock,
  Users,
  Target,
  Sparkles
} from 'lucide-react';

const Services = () => {
  const mainServices = [
    {
      icon: Bot,
      title: 'Chatbots Inteligentes',
      description: 'Assistentes virtuais com IA que revolucionam o atendimento ao cliente com processamento de linguagem natural avançado.',
      features: [
        'Processamento de linguagem natural (NLP)',
        'Integração multicanal (WhatsApp, Telegram, Web)',
        'Aprendizado contínuo e melhoria automática',
        'Análise de sentimentos em tempo real',
        'Escalabilidade para milhões de conversas'
      ],
      benefits: [
        'Redução de 80% no tempo de resposta',
        'Disponibilidade 24/7 sem interrupções',
        'Economia de até 60% em custos operacionais',
        'Aumento de 40% na satisfação do cliente'
      ],
      technologies: ['OpenAI GPT', 'Google Dialogflow', 'Microsoft Bot Framework', 'Rasa', 'TensorFlow'],
      price: 'A partir de R$ 2.500/mês'
    },
    {
      icon: Brain,
      title: 'Análise Preditiva',
      description: 'Antecipe tendências e tome decisões estratégicas baseadas em dados com algoritmos de machine learning de última geração.',
      features: [
        'Modelos de machine learning personalizados',
        'Previsão de demanda e vendas',
        'Análise de risco e detecção de fraudes',
        'Otimização de preços dinâmica',
        'Dashboards interativos em tempo real'
      ],
      benefits: [
        'Aumento de 35% na precisão das previsões',
        'Redução de 50% em perdas por estoque',
        'Melhoria de 25% na margem de lucro',
        'Detecção de 99% das tentativas de fraude'
      ],
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Apache Spark'],
      price: 'A partir de R$ 5.000/mês'
    },
    {
      icon: Zap,
      title: 'Automação de Processos (RPA)',
      description: 'Elimine tarefas repetitivas e otimize fluxos de trabalho com robôs inteligentes que aprendem e se adaptam.',
      features: [
        'Automação de processos complexos',
        'Integração com sistemas legados',
        'Monitoramento e alertas em tempo real',
        'Escalabilidade automática de recursos',
        'Interface visual para criação de fluxos'
      ],
      benefits: [
        'Redução de 90% em tarefas manuais',
        'Eliminação de erros humanos',
        'ROI de 300% em 12 meses',
        'Liberação de equipe para tarefas estratégicas'
      ],
      technologies: ['UiPath', 'Blue Prism', 'Automation Anywhere', 'Microsoft Power Automate'],
      price: 'A partir de R$ 3.500/mês'
    },
    {
      icon: BarChart3,
      title: 'Business Intelligence com IA',
      description: 'Dashboards inteligentes que transformam dados brutos em insights acionáveis para decisões estratégicas.',
      features: [
        'Dashboards interativos e personalizáveis',
        'Relatórios automatizados e agendados',
        'Análise de dados em tempo real',
        'Integração com múltiplas fontes de dados',
        'Alertas inteligentes baseados em anomalias'
      ],
      benefits: [
        'Redução de 70% no tempo de análise',
        'Aumento de 45% na velocidade de decisão',
        'Identificação automática de oportunidades',
        'Visibilidade completa do negócio'
      ],
      technologies: ['Power BI', 'Tableau', 'Looker', 'Apache Superset', 'D3.js'],
      price: 'A partir de R$ 4.000/mês'
    },
    {
      icon: Cpu,
      title: 'Processamento de Dados em Larga Escala',
      description: 'Processe e analise grandes volumes de dados com velocidade e precisão usando tecnologias de big data.',
      features: [
        'Processamento distribuído de big data',
        'ETL automatizado e otimizado',
        'Data lakes e warehouses modernos',
        'APIs robustas para integração',
        'Backup e recuperação automática'
      ],
      benefits: [
        'Processamento 100x mais rápido',
        'Capacidade para petabytes de dados',
        'Redução de 60% nos custos de infraestrutura',
        'Disponibilidade de 99.99%'
      ],
      technologies: ['Apache Spark', 'Hadoop', 'Kafka', 'Elasticsearch', 'MongoDB'],
      price: 'A partir de R$ 6.000/mês'
    },
    {
      icon: Shield,
      title: 'IA Segura e Compliance',
      description: 'Soluções de IA com os mais altos padrões de segurança, privacidade e conformidade regulatória.',
      features: [
        'Criptografia end-to-end avançada',
        'Compliance total com LGPD/GDPR',
        'Auditoria e logs detalhados',
        'Controle de acesso granular',
        'Monitoramento de segurança 24/7'
      ],
      benefits: [
        'Proteção total dos dados sensíveis',
        'Conformidade regulatória garantida',
        'Redução de 95% em riscos de segurança',
        'Certificações internacionais'
      ],
      technologies: ['AWS Security', 'Azure Security', 'HashiCorp Vault', 'OAuth 2.0'],
      price: 'A partir de R$ 3.000/mês'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Descoberta e Análise',
      description: 'Análise profunda dos seus processos atuais, identificação de oportunidades e definição de objetivos.',
      icon: Target
    },
    {
      step: '02',
      title: 'Estratégia e Planejamento',
      description: 'Desenvolvimento de roadmap detalhado com cronograma, recursos necessários e métricas de sucesso.',
      icon: Brain
    },
    {
      step: '03',
      title: 'Desenvolvimento e Testes',
      description: 'Criação da solução com metodologia ágil, testes rigorosos e validação contínua.',
      icon: Cog
    },
    {
      step: '04',
      title: 'Implementação e Deploy',
      description: 'Implantação gradual com monitoramento em tempo real e ajustes conforme necessário.',
      icon: Zap
    },
    {
      step: '05',
      title: 'Monitoramento e Otimização',
      description: 'Acompanhamento contínuo, otimizações baseadas em dados e suporte especializado.',
      icon: TrendingUp
    }
  ];

  const technologies = {
    'Inteligência Artificial': ['TensorFlow', 'PyTorch', 'OpenAI GPT', 'Hugging Face', 'Scikit-learn'],
    'Cloud Computing': ['AWS', 'Google Cloud', 'Microsoft Azure', 'Docker', 'Kubernetes'],
    'Big Data': ['Apache Spark', 'Hadoop', 'Kafka', 'Elasticsearch', 'MongoDB'],
    'Automação': ['UiPath', 'Blue Prism', 'Selenium', 'Zapier', 'Microsoft Power Automate'],
    'Analytics': ['Power BI', 'Tableau', 'Looker', 'Apache Superset', 'D3.js'],
    'Segurança': ['OAuth 2.0', 'JWT', 'HashiCorp Vault', 'SSL/TLS', 'OWASP']
  };

  const benefits = [
    {
      icon: Clock,
      title: 'Implementação Rápida',
      description: 'Deploy em 2-4 semanas com nossa metodologia ágil comprovada.'
    },
    {
      icon: Users,
      title: 'Equipe Especializada',
      description: 'Time de experts com certificações internacionais em IA e automação.'
    },
    {
      icon: TrendingUp,
      title: 'ROI Comprovado',
      description: 'Retorno médio de 300% sobre investimento em 12 meses.'
    },
    {
      icon: Shield,
      title: 'Segurança Garantida',
      description: 'Compliance total com LGPD e padrões internacionais de segurança.'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 relative overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(40)].map((_, i) => (
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
            className="space-y-8"
          >
            <div className="inline-flex items-center space-x-2 bg-primary-500/20 backdrop-blur-sm border border-primary-500/30 rounded-full px-6 py-3 text-primary-300">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-medium">Soluções Completas de IA</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Nossos
              <span className="gradient-text"> Serviços</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Soluções completas de inteligência artificial e automação para transformar 
              seu negócio e impulsionar o crescimento exponencial.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-6 mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-dark-800">
              Soluções que
              <span className="gradient-text"> Transformam</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cada serviço é desenvolvido com tecnologia de ponta para resolver 
              desafios específicos do seu negócio.
            </p>
          </motion.div>

          <div className="space-y-16">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-dark-800">{service.title}</h3>
                      <div className="text-primary-600 font-semibold">{service.price}</div>
                    </div>
                  </div>

                  <p className="text-lg text-gray-600 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-dark-800 mb-3">Recursos Principais:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-800 mb-3">Benefícios Comprovados:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="bg-primary-50 rounded-lg p-3 text-sm text-primary-700 font-medium">
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Link
                    to="/contato"
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-xl hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <span>Solicitar Proposta</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                    <div className="space-y-6">
                      <h4 className="text-lg font-semibold text-dark-800">Tecnologias Utilizadas:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="bg-gradient-to-r from-primary-500/10 to-blue-500/10 rounded-xl p-6">
                        <div className="text-center space-y-4">
                          <div className="text-3xl font-bold text-dark-800">
                            {index === 0 ? '80%' : index === 1 ? '35%' : index === 2 ? '90%' : index === 3 ? '70%' : index === 4 ? '100x' : '95%'}
                          </div>
                          <div className="text-gray-600">
                            {index === 0 ? 'Redução no tempo de resposta' : 
                             index === 1 ? 'Aumento na precisão' : 
                             index === 2 ? 'Redução em tarefas manuais' : 
                             index === 3 ? 'Redução no tempo de análise' : 
                             index === 4 ? 'Mais rápido no processamento' : 
                             'Redução em riscos de segurança'}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-dark-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-blue-500/5" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-6 mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Nosso
              <span className="gradient-text"> Processo</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Metodologia comprovada que garante o sucesso do seu projeto de IA.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center space-y-6"
              >
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-dark-800 font-bold text-sm">
                    {step.step}
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-white">{step.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                </div>

                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary-500 to-transparent transform translate-x-4" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-6 mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-dark-800">
              Tecnologias de
              <span className="gradient-text"> Ponta</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Utilizamos as mais avançadas ferramentas e frameworks do mercado.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(technologies).map(([category, techs], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-dark-800 mb-6">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: (index * 0.1) + (techIndex * 0.05) }}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-2 bg-primary-500 text-white rounded-lg text-sm font-medium hover:bg-primary-600 transition-colors cursor-pointer"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-6 mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-dark-800">
              Por que Escolher a
              <span className="gradient-text"> ProInvest?</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-dark-800 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary-600 to-primary-700 relative overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
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
              Pronto para Revolucionar
              <br />
              Seu Negócio?
            </h2>
            
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Agende uma consultoria gratuita e descubra como nossas soluções de IA 
              podem transformar seus processos e impulsionar seu crescimento.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                to="/contato"
                className="group px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <span className="flex items-center space-x-2">
                  <span>Solicitar Consultoria Gratuita</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <Link
                to="/sobre"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-primary-600 transition-all duration-300"
              >
                Conhecer Nossa Empresa
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;