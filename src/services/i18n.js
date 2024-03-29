import i18next from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    pt: {
        translation: {
            /* nav */
            home: "Inicio",
            about: "Sobre mim",
            skills: "Habilidades",
            services: "Serviços",
            portfolio: "Projetos",
            contact: "Contato",
            /* header */
            phrase1: "Olá, eu sou",
            phrase2: "Aprendizado focado em Javascript e React JS",
            phrase4: "Vamos Conversar",
            scrollDown: "Descer tudo",
            /* about */
            knowMore: "Saiba mais",
            aboutMe: "Sobre mim",
            experience: "Experiência",
            experienceDesc: "1 ano+ em Freelancer",
            clients: "Clientes",
            clientsDesc: "10+ pelo Brasil todo",
            projects: "Projetos",
            projectsDesc: "15+ concluídos",
            aboutMeP: "Bacharel em Sistemas de Informação e apaixonado por programação. Estudo desenvolvimento Frontend a mais de 1 ano através de diversos cursos, bootcamps e leituras.",
            contactBtn: "Contato",
            /* skills */
            aboutMySkills: "Sobre minhas habilidades",
            frontendTitle: "Desenvolvedor Frontend",
            backendTitle: "Desenvolvedor Backend",
            beginner: "Iniciante",
            intermediate: "Intermediário",
            advanced: "Avançado",
            st1: "Trabalho em Equipe",
            st2: "Comunicação",
            st3: "Resiliência",
            st4: "Flexibilidade",
            st5: "Proatividade",
            st6: "Criatividade",
            st7: "Organização",
            st8: "Trabalhar sob pressão",
            st9: "Liderança",
            st10: "Ética",
            /* services */
            aboutMyJobs: "Sobre meus serviços",
            cardOneTitle: "Desenvolvimento Web",
            cardOneTopic1: "Criação de Páginas Web: Landing Pages e Multi Pages",
            cardOneTopic2: "Melhorias de Layouts",
            cardOneTopic3: "Alteração, adição e remoção de funcionalidades",
            cardOneTopic4: "Responsividade",
            cardOneTopic5: "Correção de bugs",
            /* portfolio */
            aboutMyProjects: "Sobre meus projetos",
            /* testimonials */
            reviewClients: "Relatos de clientes",
            aboutMyTestimonials: "Depoimentos",
            /* contact */
            getInTouch: "Entre em contato",
            contactMe: "Fale comigo",
            emailLink: "Me envie um email",
            messengerLink: "Me envie uma mensagem via Messenger",
            whatsappLink: "Me envie uma mensagem via Whatsapp",
            fullName: "Nome Completo",
            email: "exemplo@exemplo.com",
            message: "Mensagem",
            success: "Enviado com sucesso!",
            fail: "Falha no Envio!",
            sendMessage: "Enviar Mensagem",
            /* footer */
            menuHome: "Inicio",
            menuAbout: "Sobre mim",
            menuSkills: "Habilidades",
            menuServices: "Serviços",
            menuPortfolio: "Projetos",
            menuTestimonials: "Depoimentos",
            menuContact: "Contato",
            copyright: "Todos os direitos reservados."
        },
    },
    en: {
        translation: {
            /* nav */
            home: "Home",
            about: "About me",
            skills: "Skills",
            services: "Services",
            portfolio: "Projects",
            contact: "Contact",
            /* header */
            phrase1: "Hello, I'm",
            phrase2: "Learning focused on Javascript and React JS",
            phrase4: "Let's Talk",
            scrollDown: "Scroll Down",
            /* about */
            knowMore: "Get to Know",
            aboutMe: "About me",
            experience: "Experience",
            experienceDesc: "1 year+ as a freelancer",
            clients: "Clients",
            clientsDesc: "10+ nationwide",
            projects: "Projects",
            projectsDesc: "15+ completed",
            aboutMeP: "Bachelor in Information Systems and passionate about programming. I've been studying Frontend development for over 1 year through various courses, bootcamps and readings.",
            contactBtn: "Contact me",
            /* skills */
            aboutMySkills: "Skills",
            frontendTitle: "Frontend Development",
            backendTitle: "Backend Development",
            beginner: "Beginner",
            intermediate: "Intermediate",
            advanced: "Advanced",
            st1: "Team Work",
            st2: "Communication",
            st3: "Resiliência",
            st4: "Resilience",
            st5: "Proactivity",
            st6: "Creativity",
            st7: "Organization",
            st8: "Work under pressure",
            st9: "Leadership",
            st10: "Ethic",
            /* services */
            aboutMyJobs: "Services",
            cardOneTitle: "Web Development",
            cardOneTopic1: "Creation of Web Pages: Landing Pages and Multi Pages",
            cardOneTopic2: "Layouts Improvements",
            cardOneTopic3: "Change, add and remove features",
            cardOneTopic4: "Responsiveness",
            cardOneTopic5: "Bug fix",
            /* portfolio */
            aboutMyProjects: "Projects",
            /* testimonials */
            reviewClients: "Review from clients",
            aboutMyTestimonials: "Testimonials",
            /* contact */
            getInTouch: "Get In Touch",
            contactMe: "Contact me",
            emailLink: "Send me a email",
            messengerLink: "Send me a message via Messenger",
            whatsappLink: "Send me a message via Whatsapp",
            fullName: "Your Full Name",
            email: "example@example.com",
            message: "Your message",
            success: "Sucessfull!",
            sendMessage: "Send Message",
            fail: "Fail!",
            /* footer */
            menuHome: "Home",
            menuAbout: "About me",
            menuSkills: "Skills",
            menuServices: "Services",
            menuPortfolio: "Projects",
            menuTestimonials: "Testimonials",
            menuContact: "Contact",
            copyright: "All rights reserved."
        }
    }
};

i18next
    .use(initReactI18next)
    .init({
        resources,
        lng: "pt",
        interpolation: {
            escapeValue: false,
        },
    });

export default i18next;