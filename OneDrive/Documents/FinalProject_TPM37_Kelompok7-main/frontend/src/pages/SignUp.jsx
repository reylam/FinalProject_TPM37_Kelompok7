import React, { useState } from 'react';

const SignUp = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    groupName: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    email: '',
    whatsapp: '',
    lineId: '',
    githubId: '',
    birthPlace: '',
    birthDate: '',
    cv: null,
    flazzCard: null,
    idCard: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-blue-700 to-purple-900 py-10">
      
      <div className="absolute top-0 w-full p-4 flex justify-between items-center px-10 text-white bg-opacity-20 bg-black backdrop-blur-sm">
        <h1 className="text-xl font-bold text-orange-500">Kinetic</h1>
        <div className="hidden md:flex gap-6 text-sm">
          <button>HOME</button>
          <button>DASHBOARD</button>
          <button>ABOUT</button>
          <button className="bg-white text-black px-4 py-1 rounded-full font-bold">LOGIN</button>
        </div>
      </div>

      <div className="bg-[#0f1b3d] w-full max-w-md rounded-2xl shadow-2xl p-8 mt-16 relative">
        
        <div className="bg-gray-200 w-32 h-16 mx-auto mb-6 flex items-center justify-center rounded shadow-md">
           <span className="text-gray-500 font-bold">LOGO</span>
        </div>

        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-white tracking-wider">SIGN UP</h2>
          <p className="text-gray-300 text-sm mt-1">
            {step === 1 ? "START YOUR JOURNEY" : "Leader Information"}
          </p>
        </div>

        {step === 1 && (
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setStep(2); }}>
            <InputField label="Group Name" name="groupName" value={formData.groupName} onChange={handleChange} placeholder="Group Name" />
            <InputField label="Password" name="password" type="password" value={formData.password} onChange={handleChange} placeholder="Password" />
            <InputField label="Confirm Password" name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleChange} placeholder="Password" />

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl mt-6 transition duration-200"
            >
              Next
            </button>

            <p className="text-center text-gray-400 text-xs mt-4">
              Already have an account? <a href="/login" className="text-white underline">Log In</a>
            </p>
          </form>
        )}

        {step === 2 && (
          <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
            <InputField label="Full Name" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="John Doe" />
            <InputField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="example@gmail.com" />
            <InputField label="Whatsapp Number" name="whatsapp" value={formData.whatsapp} onChange={handleChange} placeholder="08XX XXXX XXX" />
            <InputField label="LINE ID" name="lineId" value={formData.lineId} onChange={handleChange} placeholder="LINE ID Number" />
            <InputField label="Github/Gitlab ID" name="githubId" value={formData.githubId} onChange={handleChange} placeholder="Github ID" />
            
            <div>
              <label className="block text-white text-sm font-bold mb-1">Birth Place</label>
              <select 
                name="birthPlace" 
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                <option value="">Location</option>
                <option value="Jakarta">Jakarta</option>
                <option value="Surabaya">Surabaya</option>
                <option value="Bandung">Bandung</option>
              </select>
            </div>

            <InputField label="Birth Date" name="birthDate" type="date" value={formData.birthDate} onChange={handleChange} />

            <FileInput label="CV" name="cv" onChange={handleFileChange} />
            <FileInput label="Flazz Card" name="flazzCard" onChange={handleFileChange} />
            <FileInput label="ID Card (KTP)" name="idCard" onChange={handleFileChange} />

            <div className='flex gap-2 mt-6'>
                <button
                type="button"
                onClick={() => setStep(1)}
                className="w-1/3 bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 rounded-xl transition duration-200"
                >
                Back
                </button>
                <button
                type="submit"
                className="w-2/3 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition duration-200"
                >
                Sign Up
                </button>
            </div>

            <p className="text-center text-gray-400 text-xs mt-4">
              Already have an account? <a href="/login" className="text-white underline">Log In</a>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};


const InputField = ({ label, type = "text", placeholder, value, onChange, name }) => (
  <div>
    <label className="block text-white text-sm font-bold mb-1 ml-1">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full px-4 py-2 rounded-full text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
    />
  </div>
);

const FileInput = ({ label, name, onChange }) => (
  <div>
    <label className="block text-white text-sm font-bold mb-1 ml-1">{label}</label>
    <div className="relative">
      <input
        type="file"
        name={name}
        onChange={onChange}
        className="block w-full text-sm text-gray-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-white file:text-blue-700
          hover:file:bg-blue-100
          bg-white rounded-full cursor-pointer
        "
      />
    </div>
    <p className="text-[10px] text-gray-400 mt-1 ml-2">Format: pdf, jpg, png (Max 5MB)</p>
  </div>
);

export default SignUp;