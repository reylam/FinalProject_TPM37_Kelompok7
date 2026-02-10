import React from "react";
import { useState } from "react";
import logo from "../assets/img/logo.png";
import BronzeMedal from "../assets/img/BronzeMedal.png";
import SilverMedal from "../assets/img/SilverMedal.png";
import GoldMedal from "../assets/img/GoldMedal.png";
import Money from "../assets/money.svg";
import License from "../assets/sertificate.svg";
import Arrow from "../assets/arrow.svg";
import Merch from "../assets/merch.svg";
import Dewaweb from "../assets/img/dewaweb.png";
import Line from "../assets/img/line.png";
import Microsoft from "../assets/img/microsoft.png";
import Google from "../assets/img/google.png";
import Tiket from "../assets/img/tiketcom.png";
import BNCCLogo from "../assets/img/bnccLogo.png";
import Insta from "../assets/insta.svg";
import X from "../assets/x.svg";
import Linkedln from "../assets/linkedln.svg";
import Facebook from "../assets/facebook.svg";
import "../assets/css/Slider.css"
import heroimg from "../assets/img/heroimage.jpg";

const LandingPage = () => {
  const faqs = [
  {
    question: "What if i cancel my participation?",
    answer: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero maxime quas atque voluptates eveniet perferendis temporibus in possimus ipsa ad ab eius quisquam alias, eos consectetur, odio veniam officiis cumque?"
  },
  {
    question: "Lorem Ipsum",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero maxime quas atque voluptates eveniet perferendis temporibus in possimus ipsa ad ab eius quisquam alias, eos consectetur, odio veniam officiis cumque?"
  },
  {
    question: "Lorem Ipsum",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero maxime quas atque voluptates eveniet perferendis temporibus in possimus ipsa ad ab eius quisquam alias, eos consectetur, odio veniam officiis cumque?"
  },
  {
    question: "Lorem Ipsum",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero maxime quas atque voluptates eveniet perferendis temporibus in possimus ipsa ad ab eius quisquam alias, eos consectetur, odio veniam officiis cumque?"
  },
  {
    question: "Lorem Ipsum",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero maxime quas atque voluptates eveniet perferendis temporibus in possimus ipsa ad ab eius quisquam alias, eos consectetur, odio veniam officiis cumque?"
  }
];

  const [activeIndex, setActiveIndex] = useState(null);
const [open, setOpen] = useState(false);
  return (
    <div className="w-full h-fit bg-gradient-to-r from-indigo-700 to-indigo-900">
    <div className="md:px-20 px-10 pt-3  ">
      <nav className="bg-gradient-to-b from-blue-800 to-blue-600 p-5 rounded-lg mt-5">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <img className="w-32" src={logo} alt="Logo" />

          {/* MENU DESKTOP */}
          <ul className="hidden md:flex text-white font-semibold gap-5">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#prize">Champion Prize</a></li>
            <li><a href="#media">Media Partner</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>

          {/* BUTTON DESKTOP */}
          <div className="hidden md:flex gap-3 font-semibold">
            <a
              href="#login"
              className="px-7 py-2 text-white hover:bg-white hover:text-blue-700 transition-all duration-300 rounded-sm"
            >
              Login
            </a>
            <a
              href="#register"
              className="px-7 py-2 text-blue-700 bg-white rounded-sm hover:bg-blue-700 hover:text-white transition-all duration-300"
            >
              Register
            </a>
          </div>

          {/* HAMBURGER MOBILE */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white text-2xl"
          >
            ☰
          </button>
        </div>

        {/* MENU MOBILE */}
        {open && (
          <div className="md:hidden mt-6 space-y-6 text-white font-semibold">
            <ul className="flex flex-col gap-4">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#prize">Champion Prize</a></li>
              <li><a href="#media">Media Partner</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>

            <div className="flex flex-col gap-3">
              <a
                href="#login"
                className="px-7 py-2 text-center border border-white rounded-sm"
              >
                Login
              </a>
              <a
                href="#register"
                className="px-7 py-2 text-center bg-white text-blue-700 rounded-sm"
              >
                Register
              </a>
            </div>
          </div>
        )}
      </nav>

      <div className="w-full md:h-[500px] h-[350px] bg-gradient-to-tr from-blue-900 via-blue-600 to-blue-800 rounded-lg mt-10 flex justify-center items-center">
        <div className="content text-center md:-mt-20 -mt-10">
          <p className="md:text-[100px] text-[70px] font-semibold text-white">Hackaton</p>
          <p className="md:text-lg text-sm font-semibold text-white">
            Hack Your Way to the Competition
          </p>
          <div className="btn md:pt-10 pt-5">
            <a
              href=""
              className="md:px-12 px-6 md:py-3 py-2 font-semibold text-white md:rounded-lg rounded-md md:text-lg text-sm bg-gradient-to-tr flex w-fit m-auto from-blue-500 via-blue-700 to-blue-500 transform hover:scale-110 transition-all duration-300 border border-3 border-white hover:bg-none hover:bg-white hover:text-blue-700"
            >
              Get Started
            </a>
          </div>
        </div>
        {/* <img src={heroimg} className="w-full h-[500px] object-cover rounded-lg object-top" alt="" /> */}
      </div>

      <div className="aboutus text-white flex flex-col gap-5 mt-20 md:w-[60%] w-full">
        <div className="header">
          <p className="md:text-[40px] text-[30px] md:text-start text-center font-bold">About Hackaton</p>
        </div>
        <div className="content leading-8 md:text-xl text-sm md:text-start text-center font-semibold">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </p>
        </div>
        <div className="btn pt-5 ">
          <a
            href=""
            className="md:px-12 px-6 md:py-3 py-2  bg-gradient-to-tr from-blue-300 hover:from-blue-700 via-white hover:via-blue-500 to-blue-200 hover:to-blue-700 rounded-lg text-blue-700 hover:text-white font-semibold md:text-lg text-sm flex md:inline-block justify-center transition-all duration-150"
          >
            Learn More{" "}
          </a>
        </div>
      </div>

      <div className="championPrize md:mt-40 mt-30">
        <p className="md:text-[40px] text-[30px] text-white text-center font-bold">
          Champion Prize
        </p>
        <div className="allCard flex flex-wrap justify-center md:gap-12 mt-20">
          <div className="card hover:scale-105 transition-all duration-150 lg:order-1 order-2 w-72 h-fit bg-white rounded-xl p-5 shadow-lg mt-10">
            <div className="w-28 h-40 m-auto">
            <img className="w-auto flex m-auto" src={SilverMedal} alt="" />
            </div>
            <p className="text-center text-blue-900 font-semibold text-xl ">
              Juara 2:
            </p>
            <div className="benefit mt-5 flex flex-col gap-3">
              <div className="money flex items-center gap-3">
                <img className="w-8" src={Money} alt="" />
                <p className="font-semibold text-lg text-blue-900">
                  Rp 700.000,00
                </p>
              </div>
              <div className="merch flex items-center gap-3">
                <img className="w-8" src={Merch} alt="" />
                <p className="font-semibold text-lg text-blue-900">
                  Merchandise
                </p>
              </div>
              <div className="license flex items-center gap-3">
                <img className="w-8" src={License} alt="" />
                <p className="font-semibold text-lg text-blue-900">
                  Sertifikat
                </p>
              </div>
            </div>
          </div>
          <div className="card hover:scale-105 transition-all duration-150 lg:order-2 order-1 w-72 h-fit bg-white rounded-xl p-5 shadow-lg">
<div className="w-28 h-40 m-auto">
            <img className="w-auto flex m-auto" src={GoldMedal} alt="" />
            </div>            <p className="text-center text-blue-900 font-semibold text-xl ">
              Juara 1:
            </p>
            <div className="benefit mt-5 flex flex-col gap-3">
              <div className="money flex items-center gap-3">
                <img className="w-8" src={Money} alt="" />
                <p className="font-semibold text-lg text-blue-900">
                  Rp 1.000.000,00
                </p>
              </div>
              <div className="merch flex items-center gap-3">
                <img className="w-8" src={Merch} alt="" />
                <p className="font-semibold text-lg text-blue-900">
                  Merchandise
                </p>
              </div>
              <div className="license flex items-center gap-3">
                <img className="w-8" src={License} alt="" />
                <p className="font-semibold text-lg text-blue-900">
                  Sertifikat
                </p>
              </div>
            </div>
          </div>
          <div className="card hover:scale-105 transition-all duration-150 lg:order-3 order-3 w-72 h-fit bg-white rounded-xl p-5 shadow-lg mt-12">
<div className="w-28 h-40 m-auto">
            <img className="w-auto flex m-auto" src={BronzeMedal} alt="" />
            </div>            <p className="text-center text-blue-900 font-semibold text-xl ">
              Juara 3:
            </p>
            <div className="benefit mt-5 flex flex-col gap-3">
              <div className="money flex items-center gap-3">
                <img className="w-8" src={Money} alt="" />
                <p className="font-semibold text-lg text-blue-900">
                  Rp 500.000,00
                </p>
              </div>
              <div className="merch flex items-center gap-3">
                <img className="w-8" src={Merch} alt="" />
                <p className="font-semibold text-lg text-blue-900">
                  Merchandise
                </p>
              </div>
              <div className="license flex items-center gap-3">
                <img className="w-8" src={License} alt="" />
                <p className="font-semibold text-lg text-blue-900">
                  Sertifikat
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="championPrize md:mt-40 mt-30">
        <p className="md:text-[40px] text-[30px] font-bold text-center text-white">
          Our Media Partner
        </p>
        <div className="carousel md:mt-20 mt-10 flex bg-white w-[100%] items-center overflow-hidden">
          <div className="items1 md:gap-[100px] gap-[50px] ">

          <div className="w-20 h-auto items-center flex justify-center">
            <img src={Dewaweb} alt="" />
          </div>
          <div className="w-20 h-auto items-center flex justify-center">
            <img src={Microsoft} alt="" />
          </div>
          <div className="w-20 h-auto items-center flex justify-center">
            <img src={Line} alt="" />
          </div>
          <div className="w-20 h-auto items-center flex justify-center">
            <img src={Google} alt="" />
          </div>
          <div className="w-20 h-auto items-center flex justify-center">
            <img src={Tiket} alt="" />
          </div>
          <div className="w-20 h-auto items-center flex justify-center">
            <img src={Dewaweb} alt="" />
          </div>
          <div className="w-20 h-auto items-center flex justify-center">
            <img src={Microsoft} alt="" />
          </div>
          <div className="w-20 h-auto items-center flex justify-center">
            <img src={Line} alt="" />
          </div>
          <div className="w-20 h-auto items-center flex justify-center">
            <img src={Google} alt="" />
          </div>
          <div className="w-20 h-auto items-center flex justify-center">
            <img src={Tiket} alt="" />
          </div>
          </div>
         
        </div>
      </div>
       <div>
      <section className="w-full mx-auto px-6 py-20 md:mt-20 mt-10">
        <h2 className="md:text-[40px] text-[30px] font-bold text-center text-white">
          FAQ's
        </h2>

        <div className="space-y-4 md:mt-20 mt-10">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-xl md:p-6 p-4 bg-white"
            >
              <button
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                className="w-full flex justify-between md:text-xl text-sm text-blue-600 items-center text-left font-bold"
              >
                <span>{faq.question}</span>
                <span className="w-fit rounded-full border-1 border-blue-600 md:px-3 px-2.5 py-2 h-fit">
                  <img className="md:w-4 w-2" src={Arrow} alt="" />
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? "max-h-40 mt-3" : "max-h-0"
                }`}
              >
                <p className="text-blue-600">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="contactus ">
<p className="md:text-[40px] text-[30px] font-bold  text-white">
          Contact Us
        </p>
<div className="flex flex-col gap-5 mt-5">


        <div className="flex flex-col gap-3">
          <p className="font-semibold md:text-xl text-base text-white">Full Name :</p>
          <input className="w-full rounded-full md:p-3 p-2 bg-white border-1 border-blue-300 md:px-7 px-5" placeholder="John Doe" action=""></input>
        </div>
        <div className="flex flex-col gap-3">
          <p className="font-semibold md:text-xl text-base text-white">Email :</p>
          <input className="w-full rounded-full md:p-3 p-2 bg-white border-1 border-blue-300 md:px-7 px-5" placeholder="example@gmail.com" action=""></input>
        </div>
        <div className="flex flex-col gap-3">
          <p className="font-semibold md:text-xl text-base text-white">Subject :</p>
          <input className="w-full rounded-full md:p-3 p-2 bg-white border-1 border-blue-300 md:px-7 px-5" placeholder="Lorem Ipsum" action=""></input>
        </div>
        <div className="flex flex-col gap-3">
          <p className="font-semibold md:text-xl text-base text-white">Message :</p>
          <input className="w-full rounded-full md:p-3 p-2 bg-white border-1 border-blue-300 md:px-7 px-5" placeholder="Lorem Ipsum" action=""></input>
        </div>
        <div className="btn w-full flex justify-end ">
          <a className="w-fit font-semibold md:text-lg text-sm p-2 md:px-12 px-8  text-center h-fit flex items-center justify-end text-blue-700 bg-white border-2 border-blue-500 rounded-full" href="">Submit</a>
        </div>
        </div>
      </div>
    </div>
    </div>
    <footer className="flex justify-between md:px-10 px-5 md:py-10 py-5 bg-white mt-20">
      <div className="left flex flex-col gap-4 ">
          <p className="font-semibold md:text-sm text-xs text-blue-600">Powered and Organized by</p>
          <img className="md:w-56 w-40" src={BNCCLogo} alt="" />
          <p className="md:text-sm text-xs font-semibold  text-blue-600">© 2025 — Learning and Training BNCC</p>
      </div>
      <div className="center flex flex-col md:justify-center justify-end">
        <p className="md:text-sm text-xs font-semibold  text-blue-600 md:-mb-12 mb-0">Privacy Policy  |  Privacy Policy</p>
      </div>
      <div className="right flex flex-col md:justify-center justify-end">
        <p className="md:text-sm text-xs font-semibold  text-blue-600 md:order-1 order-2 md:mt-0 mt-2">Email: Technoscape@gmail.com</p>
        <div className="flex gap-3 mt-2 md:order-2 order-1">
          <img className="md:w-10 w-6" src={Insta} alt="" />
          <img className="md:w-10 w-6" src={X} alt="" />
          <img className="md:w-10 w-6" src={Facebook} alt="" />
          <img className="md:w-10 w-6" src={Linkedln} alt="" />
        </div>
      </div>
    </footer>
    </div>
  );
};

export default LandingPage;
