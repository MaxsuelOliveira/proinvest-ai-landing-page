import { motion } from 'framer-motion';
import { 
  Users, 
  Target, 
  Award, 
  TrendingUp, 
  Brain, 
  Zap, 
  Shield, 
  Globe,
  CheckCircle,
  Star
} from 'lucide-react';

const About = () => {
  const stats = [
    { number: '500+', label: 'Projetos de IA Entregues', icon: Brain },
    { number: '150+', label: 'Empresas Transformadas', icon: Users },
    { number: '98%', label: 'Taxa de Satisfação', icon: Star },
    { number: '5+', label: 'Anos de Experiência', icon: Award },
  ];

  const timeline = [
    {
      year: '2019',
      title: 'Fundação',
      description: 'Início da jornada com foco em automações simples e chatbots básicos.'
    },
    {
      year: '2020',
      title: 'Expansão em IA',
      description: 'Desenvolvimento de soluções avançadas com machine learning e processamento de linguagem natural.'
    },
    {
      year: '2021',
      title: 'Reconhecimento',
      description: 'Premiados como "Startup de IA do Ano" e alcançamos 100+ clientes satisfeitos.'
    },
    {
      year: '2022',
      title: 'Escala Nacional',
      description: 'Expansão para todo o Brasil com escritórios em São Paulo, Rio de Janeiro e Belo Horizonte.'
    },
    {
      year: '2023',
      title: 'Inovação Contínua',
      description: 'Lançamento de plataforma própria de IA e parcerias estratégicas internacionais.'
    },
    {
      year: '2024',
      title: 'Liderança de Mercado',
      description: 'Consolidação como líder em automações com IA no Brasil com 500+ projetos entregues.'
    }
  ];

  const team = [
    {
      name: 'Dr. Carlos Mendes',
      role: 'CEO & Fundador',
      bio: 'PhD em Inteligência Artificial pela USP. 15+ anos de experiência em tecnologia.',
      initials: 'CM'
    },
    {
      name: 'Dra. Ana Rodrigues',
      role: 'CTO',
      bio: 'Especialista em Machine Learning e Deep Learning. Ex-Google e Microsoft.',
      initials: 'AR'
    },
    {
      name: 'Prof. Roberto Silva',
      role: 'Head of AI Research',
      bio: 'Professor de IA na UNICAMP. Autor de 50+ papers em conferências internacionais.',
      initials: 'RS'
    },
    {
      name: 'Marina Costa',
      role: 'Head of Product',
      bio: 'Product Manager com 10+ anos em startups de tecnologia. Ex-Nubank.',
      initials: 'MC'
    }
  ];

  const values = [
    {
      icon: Brain,
      title: 'Inovação Constante',
      description: 'Sempre na vanguarda das tecnologias de IA, desenvolvendo soluções que definem o futuro.'
    },
    {
      icon: Users,
      title: 'Foco no Cliente',
      description: 'Cada solução é pensada para resolver problemas reais e gerar valor tangível para nossos clientes.'
    },
    {
      icon: Shield,
      title: 'Ética e Transparência',
      description: 'Desenvolvemos IA responsável, com transparência total sobre como nossos algoritmos funcionam.'
    },
    {
      icon: Globe,
      title: 'Impacto Social',
      description: 'Acreditamos que a IA deve democratizar oportunidades e criar um futuro melhor para todos.'
    }
  ];

  const certifications = [
    { name: 'ISO 27001', description: 'Segurança da Informação' },
    { name: 'ISO 9001', description: 'Gestão da Qualidade' },
    { name: 'LGPD Compliance', description: 'Proteção de Dados' },
    { name: 'AWS Partner', description: 'Parceiro Avançado AWS' },
    { name: 'Google Cloud', description: 'Parceiro Certificado GCP' },
    { name: 'Microsoft Azure', description: 'Gold Partner Azure AI' }
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
              Sobre a
              <span className="gradient-text"> ProInvest</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Somos pioneiros em automações com inteligência artificial no Brasil, 
              transformando negócios através de tecnologia de ponta e inovação constante.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
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
                <div className="text-4xl font-bold text-dark-800">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gray-50">
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
                  <span className="gradient-text"> Missão</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Democratizar o acesso à inteligência artificial, capacitando empresas de todos os 
                  tamanhos a automatizar processos, aumentar a produtividade e competir no mercado 
                  global através de soluções inovadoras e acessíveis.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-dark-800">
                  Nossa
                  <span className="gradient-text"> Visão</span>
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Ser a principal referência em automações com IA na América Latina até 2030, 
                  impulsionando a transformação digital de milhares de empresas e contribuindo 
                  para um futuro mais eficiente e sustentável.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-r from-primary-500/10 to-blue-500/10 rounded-2xl p-8 backdrop-blur-sm border border-primary-200">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center space-y-2">
                    <Target className="w-12 h-12 text-primary-600 mx-auto" />
                    <div className="text-2xl font-bold text-dark-800">Precisão</div>
                    <div className="text-gray-600 text-sm">99.9% de acurácia</div>
                  </div>
                  <div className="text-center space-y-2">
                    <Zap className="w-12 h-12 text-primary-600 mx-auto" />
                    <div className="text-2xl font-bold text-dark-800">Velocidade</div>
                    <div className="text-gray-600 text-sm">Deploy em 2-4 semanas</div>
                  </div>
                  <div className="text-center space-y-2">
                    <TrendingUp className="w-12 h-12 text-primary-600 mx-auto" />
                    <div className="text-2xl font-bold text-dark-800">Crescimento</div>
                    <div className="text-gray-600 text-sm">300% ROI médio</div>
                  </div>
                  <div className="text-center space-y-2">
                    <Shield className="w-12 h-12 text-primary-600 mx-auto" />
                    <div className="text-2xl font-bold text-dark-800">Segurança</div>
                    <div className="text-gray-600 text-sm">Compliance total</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
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
              Nossa
              <span className="gradient-text"> Jornada</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Uma trajetória de inovação, crescimento e transformação digital.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-primary-600 rounded-full" />
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                      <div className="text-primary-400 font-bold text-lg mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                  
                  <div className="relative z-10 w-6 h-6 bg-primary-500 rounded-full border-4 border-dark-900 flex-shrink-0" />
                  
                  <div className="w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-6 mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-dark-800">
              Nossa
              <span className="gradient-text"> Equipe</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Especialistas apaixonados por IA e comprometidos com a excelência.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                  {member.initials}
                </div>
                <h3 className="text-xl font-bold text-dark-800 mb-2">{member.name}</h3>
                <div className="text-primary-600 font-medium mb-4">{member.role}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-6 mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-dark-800">
              Nossos
              <span className="gradient-text"> Valores</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Os princípios que guiam cada decisão e cada linha de código que escrevemos.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-dark-800">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-6 mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Certificações e
              <span className="gradient-text"> Parcerias</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Reconhecimento da nossa excelência técnica e compromisso com a qualidade.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-primary-400" />
                </div>
                <h3 className="text-white font-bold text-sm mb-2">{cert.name}</h3>
                <p className="text-gray-400 text-xs">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;