import React from 'react';
import styled from 'styled-components';

const services = [
  {
    title: 'Full Stack Web Development',
    description: 'End-to-end development of web applications with seamless integration and deployment.',
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 9V5H4V9H20ZM20 11H4V19H20V11ZM3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM5 12H8V17H5V12ZM5 6H7V8H5V6ZM9 6H11V8H9V6Z" />
      </svg>
    )
  },
  // [Other services remain unchanged as per your original array]
  {
    title: 'Frontend Development',
    description: 'Building responsive, accessible, and high-performance user interfaces.',
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 3H21V21H3V3ZM5 5V19H19V5H5ZM7 7H17V9H7V7ZM7 11H17V13H7V11ZM7 15H13V17H7V15Z" />
      </svg>
    )
  },
  {
    title: 'Backend Development & APIs',
    description: 'Designing and implementing secure RESTful APIs and backend systems.',
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L20 7V17L12 22L4 17V7L12 2ZM12 4.15L6 7.58V16.42L12 19.85L18 16.42V7.58L12 4.15ZM12 8C13.66 8 15 9.34 15 11C15 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11C9 9.34 10.34 8 12 8Z" />
      </svg>
    )
  },
  {
    title: 'Database Design & Management',
    description: 'Structuring efficient and scalable databases tailored to application needs.',
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C7.59 2 4 3.79 4 6V18C4 20.21 7.59 22 12 22C16.41 22 20 20.21 20 18V6C20 3.79 16.41 2 12 2ZM12 4C15.31 4 18 5.34 18 6C18 6.66 15.31 8 12 8C8.69 8 6 6.66 6 6C6 5.34 8.69 4 12 4ZM6 8.43C7.5 9.21 9.63 9.75 12 9.75C14.37 9.75 16.5 9.21 18 8.43V10.56C16.5 11.34 14.37 11.88 12 11.88C9.63 11.88 7.5 11.34 6 10.56V8.43ZM6 12.99C7.5 13.77 9.63 14.31 12 14.31C14.37 14.31 16.5 13.77 18 12.99V15.12C16.5 15.9 14.37 16.44 12 16.44C9.63 16.44 7.5 15.9 6 15.12V12.99ZM6 17.55C7.5 18.33 9.63 18.87 12 18.87C14.37 18.87 16.5 18.33 18 17.55V18C18 18.66 15.31 20 12 20C8.69 20 6 18.66 6 18V17.55Z" />
      </svg>
    )
  },
  {
    title: 'Deployment & DevOps',
    description: 'Deploying applications with CI/CD pipelines for smooth updates and uptime.',
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7L12 12L22 7L12 2ZM2 17L12 22L22 17L12 12L2 17ZM4.74 16.44L12 20.13L19.26 16.44L12 12.75L4.74 16.44ZM12 4.87L18.26 8L12 11.13L5.74 8L12 4.87Z" />
      </svg>
    )
  },
  {
    title: 'Maintenance & Optimization',
    description: 'Ongoing support to maintain, update, and optimise applications.',
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 4V1L8 5L12 9V6C15.31 6 18 8.69 18 12C18 13.67 17.33 15.17 16.24 16.24L17.66 17.66C19.1 16.22 20 14.21 20 12C20 7.58 16.42 4 12 4ZM6 12C6 10.33 6.67 8.83 7.76 7.76L6.34 6.34C4.9 7.78 4 9.79 4 12C4 16.42 7.58 20 12 20V23L16 19L12 15V18C8.69 18 6 15.31 6 12Z" />
      </svg>
    )
  }
];

const Services = () => {
  return (
    <Section id="services">
      <div className="container">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#12F7D6] font-bold">
      Delivering Future-Ready Solutions
  </h2>
  <p className="text-white mt-2 text-base sm:text-lg lg:text-xl mb-13">
  I develop powerful applications with clean code, modern tech stacks, and impactful design.
  </p>
        <StyledWrapper>
          {services.map((service, index) => (
            <div className="card" key={index}>
              <div className="content">
                {service.icon}
                <h3>{service.title}</h3>
                <p className="para">{service.description}</p>
              </div>
            </div>
          ))}
        </StyledWrapper>
      </div>
    </Section>
  );
};

const Section = styled.section`
  background: #292F36;
  padding: 80px 20px;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
  }

  h2 {
    font-size: 32px;
    color: #12f7d6;
    
  }

  @media (min-width: 1024px) {
    padding: 150px 20px;
  }
`;

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  justify-items: center;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  .card {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 320px;
    border-radius: 24px;
    transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    padding: 36px;
    border-radius: 22px;
    color: #ffffff;
    overflow: hidden;
    background: #1a1e23;
    transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .content::before,
  .content::after {
    position: absolute;
    content: "";
    left: 50%;
    transform: translateX(-50%);
    border-radius: inherit;
    transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .content::before {
    top: -4%;
    width: 90%;
    height: 90%;
    background: #ced8ff;
    z-index: -1;
    transform-origin: bottom;
  }

  .content::after {
    top: -8%;
    width: 80%;
    height: 80%;
    background: #e7ecff;
    z-index: -2;
    transform-origin: bottom;
  }

  .content svg {
    width: 48px;
    height: 48px;
  }

  .content h3 {
    margin: 0;
    font-size: 20px;
    font-weight: 600;
    color: #12f7d6;
  }

  .content .para {
    z-index: 1;
    opacity: 1;
    font-size: 16px;
    transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .card:hover {
    transform: translateY(-16px);
  }

  .card:hover .content::before {
    rotate: -8deg;
    top: 0;
    width: 100%;
    height: 100%;
  }

  .card:hover .content::after {
    rotate: 8deg;
    top: 0;
    width: 100%;
    height: 100%;
  }
`;

export default Services;
