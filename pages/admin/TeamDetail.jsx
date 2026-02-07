import React from 'react';

const TeamDetail = ({ team, onDelete }) => {
  if (!team) return null;

  return (
    <div className="p-8 bg-[#2825A5] rounded-b-2xl border-t border-blue-400/30 animate-fadeIn">
      
      {}
      <div className="bg-[#E0E0E0] text-[#1E1B7E] rounded-3xl p-6 mb-6 shadow-inner">
        <h4 className="font-bold text-xl mb-4 border-b-2 border-[#1E1B7E]/20 pb-2 italic">
          Leader Details
        </h4>
        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
          {}
          <div className="w-32 h-32 bg-white rounded-full border-4 border-[#1E1B7E]/50 shadow-md shrink-0"></div>
          
          {}
          <div className="flex-1 space-y-1 font-semibold italic text-sm md:text-base">
            <p><span className="opacity-70">Full Name:</span> {team.leader.name}</p>
            <p><span className="opacity-70">Email:</span> {team.leader.email}</p>
            <p><span className="opacity-70">Whatsapp Number:</span> {team.leader.wa}</p>
            <p><span className="opacity-70">Line ID:</span> {team.leader.line}</p>
            <p><span className="opacity-70">Github ID:</span> {team.leader.github}</p>
            <p><span className="opacity-70">Birth Place/Date:</span> {team.leader.birth}</p>
          </div>

          {}
          <div className="flex flex-col gap-2 min-w-[100px]">
            <button className="bg-blue-500 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-sm hover:bg-blue-600 transition-colors">CV</button>
            <button className="bg-blue-500 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-sm hover:bg-blue-600 transition-colors">ID Card</button>
            <button className="bg-blue-500 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-sm hover:bg-blue-600 transition-colors">Flazz Card</button>
          </div>
        </div>
      </div>

      {}
      <div className="space-y-3 mb-6">
        <h4 className="text-blue-300 font-bold ml-2">Team Members:</h4>
        {team.members.length > 0 ? (
          team.members.map((member, index) => (
            <div key={index} className="bg-[#1E1B7E] p-4 rounded-xl border border-blue-400/20 flex items-center gap-4">
              <div className="w-8 h-8 bg-blue-400/30 rounded-full"></div>
              <p className="font-medium">{member.name} - <span className="text-blue-400 text-sm">Member</span></p>
            </div>
          ))
        ) : (
          <p className="text-gray-400 italic ml-2 text-sm">No members registered yet.</p>
        )}
      </div>

      {}
      <div className="flex flex-col sm:flex-row gap-4">
        <button 
          className="flex-1 bg-yellow-400 text-[#1E1B7E] font-black py-3 rounded-xl hover:bg-yellow-300 transition-all uppercase tracking-wider"
          onClick={() => alert('Fitur Edit Team akan membuka Form')}
        >
          Edit Team
        </button>
        <button 
          className="flex-1 bg-red-600 text-white font-black py-3 rounded-xl hover:bg-red-500 transition-all uppercase tracking-wider"
          onClick={() => onDelete(team.id)}
        >
          Delete Team
        </button>
      </div>
    </div>
  );
};

export default TeamDetail;