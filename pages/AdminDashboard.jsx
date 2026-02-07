import TeamDetail from './TeamDetail';
{expandedId === team.id && (
  <TeamDetail 
    team={team} 
    onDelete={handleDelete} 
  />
)
}
import React, { useState } from 'react';

const AdminPanel = () => {
  const [teams, setTeams] = useState([
    { 
      id: 1, name: "Team Kinetic", regTime: "2026-02-01 10:00",
      leader: { name: "John Doe", email: "john@gmail.com", wa: "08123", line: "jd_id", github: "jd_git", birth: "Jakarta, 2000" },
      members: [
        { name: "Jane Smith", role: "Member" },
        { name: "Bob Wilson", role: "Member" }
      ]
    },
    { 
      id: 2, name: "Alpha Squad", regTime: "2026-02-05 14:00",
      leader: { name: "Budi", email: "budi@gmail.com", wa: "0899", line: "budi_ln", github: "budi_gh", birth: "Bandung, 1999" },
      members: []
    }
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [sortType, setSortType] = useState("name-asc");
  const [expandedId, setExpandedId] = useState(null);
  const filteredTeams = teams
    .filter(t => t.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sortType === "name-asc") return a.name.localeCompare(b.name);
      if (sortType === "name-desc") return b.name.localeCompare(a.name);
      if (sortType === "time-newest") return new Date(b.regTime) - new Date(a.regTime);
      return new Date(a.regTime) - new Date(b.regTime);
    });

  const handleDelete = (id) => {
    if(window.confirm("Hapus tim ini?")) setTeams(teams.filter(t => t.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#0a0e31] text-white p-6 font-sans">
      {}
      <div className="bg-[#1e2756] rounded-2xl p-6 mb-6 flex justify-between items-center border border-blue-400/30">
        <div>
          <h1 className="text-3xl font-bold">Welcome, John Doe</h1>
          <p className="text-blue-300">Admin</p>
        </div>
        <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
      </div>

      {}
      <div className="bg-[#1e2756] rounded-xl p-4 mb-6 border border-blue-400/20">
        <div className="flex justify-between text-sm mb-2">
          <span>Current Phase : Registration Phase</span>
          <span>5 Days Left</span>
        </div>
        <div className="w-full bg-gray-700 h-3 rounded-full overflow-hidden">
          <div className="bg-blue-500 h-full w-3/4"></div>
        </div>
      </div>

      {}
      <div className="flex gap-4 mb-6">
        <input 
          type="text" placeholder="Search Team Name..." 
          className="flex-1 bg-[#1e2756] border border-blue-400/30 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select 
          className="bg-[#1e2756] border border-blue-400/30 rounded-lg px-4 py-2"
          onChange={(e) => setSortType(e.target.value)}
        >
          <option value="name-asc">A-Z</option>
          <option value="name-desc">Z-A</option>
          <option value="time-newest">Terbaru</option>
          <option value="time-oldest">Terlama</option>
        </select>
      </div>

      {}
      <div className="space-y-4">
        {filteredTeams.map((team) => (
          <div key={team.id} className="bg-[#1e2756] rounded-xl border border-blue-400/20 overflow-hidden">
            {}
            <div 
              className="p-4 flex justify-between items-center cursor-pointer hover:bg-[#252f66]"
              onClick={() => setExpandedId(expandedId === team.id ? null : team.id)}
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center font-bold">T</div>
                <div>
                  <h3 className="font-bold text-lg">{team.name}</h3>
                  <p className="text-xs text-blue-300">{team.members.length + 1} Members</p>
                </div>
              </div>
              <span className={`transform transition-transform ${expandedId === team.id ? 'rotate-180' : ''}`}>▼</span>
            </div>

            {}
            {expandedId === team.id && (
              <div className="p-6 bg-[#161d44] border-t border-blue-400/20">
                <div className="grid md:grid-cols-2 gap-6">
                  {}
                  <div className="bg-[#252f66] p-4 rounded-xl border border-blue-400/30">
                    <h4 className="text-blue-400 font-bold mb-3 border-b border-blue-400/30 pb-1">Leader</h4>
                    <div className="flex gap-4">
                      <div className="w-20 h-20 bg-gray-400 rounded-full"></div>
                      <div className="text-sm space-y-1">
                        <p><span className="text-gray-400">Name:</span> {team.leader.name}</p>
                        <p><span className="text-gray-400">Email:</span> {team.leader.email}</p>
                        <p><span className="text-gray-400">Birth:</span> {team.leader.birth}</p>
                      </div>
                    </div>
                    <div className="mt-4 flex gap-2">
                      <button className="bg-blue-600 text-xs px-3 py-1 rounded-full">CV</button>
                      <button className="bg-blue-600 text-xs px-3 py-1 rounded-full">ID Card</button>
                    </div>
                  </div>

                  {}
                  <div className="flex flex-col justify-between">
                    <div className="space-y-2">
                       <h4 className="text-blue-400 font-bold">Members:</h4>
                       {team.members.length > 0 ? team.members.map((m, i) => (
                         <div key={i} className="bg-[#1e2756] p-2 rounded border border-blue-400/10 text-sm">
                           {m.name} - {m.role}
                         </div>
                       )) : <p className="text-sm text-gray-500 italic">No members added</p>}
                    </div>
                    
                    <div className="mt-6 flex gap-3">
                      <button className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg font-bold">Edit Team</button>
                      <button 
                        onClick={() => handleDelete(team.id)}
                        className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg font-bold"
                      >
                        Delete Team
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;