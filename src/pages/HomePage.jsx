import React, { useState } from "react";
import LandingImage from "../components/LandingImage";
import ServiceList from "../components/ServiceList";
import { Link, Links } from "react-router";

import HomeHeroImage from "../assets/home-hero.webp";
import TeamImage from "../assets/team.webp";

import { TbPhoneCalling } from "react-icons/tb";
import { FaCheckCircle, FaHandshake, FaChartLine, FaUserTie } from "react-icons/fa";


// import OutsourceAccounting from "../assets/outsourced-accounting.webp";

const Home = () => {
  const testimonials = [
    {
      text: "White Bull has transformed how our accounting firm operates. Their outsourced services have allowed us to scale our practice without the growing pains. Highly recommended!",
      author: "David Thompson",
      company: "Thompson Accounting Ltd"
    },
    {
      text: "The team at White Bull consistently delivers high-quality work with remarkable attention to detail. They've become an invaluable extension of our firm.",
      author: "Sarah Williams",
      company: "Williams & Partners"
    },
    {
      text: "We've reduced costs by 40% while improving our service delivery since partnering with White Bull. Their expertise in UK accounting standards is exceptional.",
      author: "Michael Johnson",
      company: "Johnson Advisory Services"
    }
  ];

  const services = [
    {
      title: "Outsourced Accounting",
      description: "Comprehensive accounting solutions tailored for UK accounting firms",
      icon: <FaChartLine className="text-4xl text-[#2a4768]" />,
      link: "/services/accounting"
    },
    {
      title: "Bookkeeping Services",
      description: "Precise and timely bookkeeping to streamline your operations",
      icon: <FaHandshake className="text-4xl text-[#2a4768]" />,
      link: "/services/bookkeeping"
    },
    {
      title: "Tax Preparation",
      description: "Expert tax services ensuring compliance with UK regulations",
      icon: <FaUserTie className="text-4xl text-[#2a4768]" />,
      link: "/services/taxreturn"
    }
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const handleNextTestimonial = () => {
    setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handlePrevTestimonial = () => {
    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const faqs = [
    {
      question: "What makes White Bull different from other outsourcing services?",
      answer: "White Bull specializes exclusively in supporting UK accounting firms with white-label solutions designed to integrate seamlessly with your existing operations. Our team understands UK accounting standards and regulations, ensuring compliance and precision for your clients."
    },
    {
      question: "How can outsourcing help my accounting practice grow?",
      answer: "Outsourcing to White Bull allows you to scale your practice without the overhead of hiring additional staff. You can take on more clients, offer expanded services, and focus on building relationships while we handle the time-consuming accounting tasks with efficiency and accuracy."
    },
    {
      question: "Is my clients' data secure with White Bull?",
      answer: "Absolutely. We implement industry-leading security protocols and comply with all UK data protection regulations. All client information is handled with the utmost confidentiality and protected through secure systems and strict access controls."
    },
    {
      question: "Can White Bull accommodate seasonal fluctuations in workload?",
      answer: "Yes, our services are fully scalable to meet your needs during tax season peaks or other busy periods. We can quickly adjust our support level to ensure you maintain excellent service quality regardless of workload fluctuations."
    }
  ];
  
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative">
        <img 
          src={HomeHeroImage} 
          alt="White Bull Accounting Services" 
          className="h-[600px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white px-4">
          <h1 className="text-5xl font-bold text-center mb-6">
            Empowering UK Accounting Firms <br /> With Outsourced Excellence
          </h1>
          <p className="text-xl text-center mb-8 max-w-3xl">
            White Bull provides premium outsourced accounting, bookkeeping, and tax services designed exclusively for UK accounting firms and CA practices.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/services"
              className="rounded-md bg-[#2a4768] px-6 py-3 font-semibold text-white hover:bg-[#1a3758] transition-all"
            >
              Explore Our Services
            </Link>
            <Link
              to="/contact"
              className="rounded-md bg-white px-6 py-3 font-semibold text-[#2a4768] hover:bg-gray-100 transition-all"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Service List */}
      <ServiceList />

      {/* Help Section */}
      <div className="mx-auto w-11/12 my-8 rounded-2xl border border-[#2a4768] bg-white p-4.5">
        <TbPhoneCalling className="text-6xl text-[#2a4768]" />
        <h2 className="text-lg font-bold">Need Help?</h2>
        <p className="pt-2 pb-5 text-gray-500">
          Get in touch and let us know how we can help. We'll be in touch as soon as possible.
        </p>
        <Link
          to="/contact"
          className="rounded-md bg-gradient-to-r from-[#2b4969] to-[#7cb5be] px-4 py-2 font-semibold text-white hover:cursor-pointer"
        >
          Contact Us
        </Link>
      </div>

      {/* About Section */}
      <div className="my-12 px-4.5">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Why <span className="text-[#2a4768]">Leading UK Accounting Firms</span> Choose White Bull
          </h2>
          <p className="mt-4 text-gray-500 max-w-3xl mx-auto">
            White Bull delivers premium outsourced accounting solutions designed specifically for UK accounting practices and CA firms seeking growth, efficiency, and excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 my-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Your Trusted <span className="text-[#2a4768]">White-Label Partner</span>
            </h3>
            <p className="text-justify leading-7 text-gray-500 mb-6">
              At White Bull, we understand the unique challenges faced by UK accounting firms. Our white-label services integrate seamlessly with your practice, allowing you to expand your service offerings without increasing overhead or compromising quality.
            </p>
            <p className="text-justify leading-7 text-gray-500">
              <span className="font-semibold text-gray-600">Pain Point:</span> Growing your practice shouldn't mean sacrificing work-life balance or service quality. With White Bull handling the heavy lifting, you can focus on client relationships and strategic growth while we ensure accuracy, compliance, and timely delivery.
            </p>
            
            <ul className="my-6">
              <li className="grid auto-cols-auto grid-flow-col my-4">
                <FaCheckCircle className="text-2xl text-[#2a4768]" />
                <p className="ml-3">
                  <span className="font-bold text-gray-600">UK-Focused Expertise: </span>
                  Our team specializes in UK accounting standards, ensuring full compliance with local regulations and requirements.
                </p>
              </li>
              <li className="grid auto-cols-auto grid-flow-col my-4">
                <FaCheckCircle className="text-2xl text-[#2a4768]" />
                <p className="ml-3">
                  <span className="font-bold text-gray-600">Scalable Solutions: </span>
                  Easily adjust your service level based on seasonal demands or practice growth without staffing concerns.
                </p>
              </li>
              <li className="grid auto-cols-auto grid-flow-col my-4">
                <FaCheckCircle className="text-2xl text-[#2a4768]" />
                <p className="ml-3">
                  <span className="font-bold text-gray-600">Cost Efficiency: </span>
                  Reduce overhead by up to 60% compared to maintaining an in-house team while maintaining premium service quality.
                </p>
              </li>
            </ul>
          </div>
          
          <div>
            <img
              src={TeamImage}
              alt="White Bull Team"
              className="rounded-2xl h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="bg-gray-50 py-16 px-4.5">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Comprehensive <span className="text-[#2a4768]">Solutions</span> for Your Practice
          </h2>
          <p className="mt-4 text-gray-500 max-w-3xl mx-auto">
            Our specialized services are designed to integrate seamlessly with your accounting firm, enhancing your capabilities while reducing overhead.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-500 mb-4">{service.description}</p>
              <Link to={service.link} className="text-[#2a4768] font-semibold hover:underline">
                Learn More →
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="rounded-md bg-[#2a4768] px-6 py-3 font-semibold text-white hover:bg-[#1a3758] transition-all"
          >
            View All Services
          </Link>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 px-4.5">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            What <span className="text-[#2a4768]">Our Clients</span> Say
          </h2>
          <p className="mt-4 text-gray-500 max-w-3xl mx-auto">
            Hear from accounting firms across the UK who have transformed their practices with White Bull.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <div className="text-5xl text-[#2a4768] mb-4">"</div>
            <p className="text-lg text-gray-600 mb-6">
              {testimonials[activeTestimonial].text}
            </p>
            <div>
              <p className="font-bold">{testimonials[activeTestimonial].author}</p>
              <p className="text-gray-500">{testimonials[activeTestimonial].company}</p>
            </div>
          </div>
          
          <div className="flex justify-between mt-6">
            <button 
              onClick={handlePrevTestimonial}
              className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full"
            >
              ←
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === activeTestimonial ? 'bg-[#2a4768]' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            <button 
              onClick={handleNextTestimonial}
              className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full"
            >
              →
            </button>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-[#2a4768] text-white py-16 px-4.5">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Why Choose White Bull?
          </h2>
          <p className="mt-4 max-w-3xl mx-auto">
            We're not just a service provider – we're your growth partner.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 rounded-2xl bg-[#325271]">
            <h3 className="text-xl font-bold mb-3">UK-Specific Expertise</h3>
            <p>
              Our team specializes in UK accounting standards and regulations, ensuring your clients receive compliant, accurate financial services.
            </p>
          </div>
          
          <div className="p-6 rounded-2xl bg-[#325271]">
            <h3 className="text-xl font-bold mb-3">White-Label Solutions</h3>
            <p>
              Our services seamlessly integrate with your firm's branding, maintaining your professional identity while we handle the workload.
            </p>
          </div>
          
          <div className="p-6 rounded-2xl bg-[#325271]">
            <h3 className="text-xl font-bold mb-3">Scalable Support</h3>
            <p>
              Easily adjust your service level based on seasonal demands or practice growth without recruiting or training concerns.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/about"
            className="rounded-md bg-white px-6 py-3 font-semibold text-[#2a4768] hover:bg-gray-100 transition-all"
          >
            Learn More About Us
          </Link>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 px-4.5 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to <span className="text-[#2a4768]">Transform</span> Your Accounting Practice?
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-8">
          Book a no-obligation consultation to discover how White Bull can help your firm grow, increase efficiency, and enhance profitability.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            to="/contact"
            className="rounded-md bg-[#2a4768] px-6 py-3 font-semibold text-white hover:bg-[#1a3758] transition-all"
          >
            Schedule a Consultation
          </Link>
          <Link
            to="/services"
            className="rounded-md border border-[#2a4768] px-6 py-3 font-semibold text-[#2a4768] hover:bg-gray-50 transition-all"
          >
            Explore Our Services
          </Link>
        </div>
      </div>

      {/* FAQs */}
      <div className="flex flex-col items-center bg-white px-4.5 py-10">
        <p className="font-semibold text-[#2a4768]">FAQs</p>
        <h2 className="text-center text-3xl font-bold">
          Frequently Asked <span className="text-[#2a4768]">Questions</span>
        </h2>
        <p className="text-center text-gray-500 max-w-2xl mx-auto mb-8">
          Find answers to common questions about our outsourced accounting services for UK firms.
        </p>
        <div className="mx-auto max-w-lg p-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200 last:border-none"
            >
              <button
                className="flex w-full items-center justify-between py-4 text-left font-semibold hover:cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className="text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <p className="pb-4 text-gray-400">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
        <Link
          to="/faq"
          className="mt-6 text-[#2a4768] font-semibold hover:underline"
        >
          View All FAQs
        </Link>
      </div>
    </>
  );
};

export default Home;