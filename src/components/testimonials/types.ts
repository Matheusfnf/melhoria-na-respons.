export interface TestimonialType {
  id: number;
  content: string;
  author: string;
  role: string;
  image: string;
}

export const testimonialData: TestimonialType[] = [
  {
    id: 1,
    content: "Os biológicos da Vioma apresentam realmente a concentração que dizem no rótulo, um diferencial de mercado com tantos produtos milagrosos!!",
    author: "Clisman Vaz",
    role: "Especialista em Controle de Qualidade",
    image: "https://i.imgur.com/NPSnLJk.png"
  },
  {
    id: 2,
    content: "A Vioma é uma empresa de qualidade e confiança tanto sobre a concentração dos profissionais quanto do produto final",
    author: "Leslie Franco",
    role: "Consultor de Algodão",
    image: "https://i.imgur.com/8tW4wfb.jpeg"
  },
  {
    id: 3,
    content: "Através das análises e por meio de estudo de viabilidade técnica, pode-se dizer que os produtos Vioma, demonstram resultados produtivos e eficazes.",
    author: "Fernanda Vaz",
    role: "Representante Proativa Lab",
    image: "https://i.imgur.com/o8vexnR.png"
  },
  {
    id: 4,
    content: "Os bioinsumos são uma realidade crescente na agricultura brasileira, auxiliando milhares de produtores a cada safra. A Vioma oferece produtos e soluções alinhados a esse marco sustentável, contribuindo para a modernização e a sustentabilidade dos cultivos no Brasil.",
    author: "Douglas Alves",
    role: "Sócio Tena Soluções Sustentáveis",
    image: "https://i.imgur.com/6616AiK.png"
  }
];