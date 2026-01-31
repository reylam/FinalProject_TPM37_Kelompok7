const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");

const prisma = new PrismaClient();

const defaultAdmin = {
  email: "admin@tpm2025.hackathon",
  password: "Admin123!",
  fullName: "System Administrator",
  role: "SUPER_ADMIN",
};

const defaultTimelines = [
  {
    title: "Registration Period",
    description: "Open registration for teams to join the hackathon",
    startDate: new Date("2025-02-01T00:00:00.000Z"),
    endDate: new Date("2025-02-28T23:59:59.000Z"),
    type: "REGISTRATION",
    isActive: true,
  },
  {
    title: "Project Submission",
    description: "Teams submit their final projects",
    startDate: new Date("2025-03-01T00:00:00.000Z"),
    endDate: new Date("2025-03-15T23:59:59.000Z"),
    type: "SUBMISSION",
    isActive: false,
  },
  {
    title: "Project Review",
    description: "Jury reviews and evaluates submissions",
    startDate: new Date("2025-03-16T00:00:00.000Z"),
    endDate: new Date("2025-03-20T23:59:59.000Z"),
    type: "REVIEW",
    isActive: false,
  },
  {
    title: "Final Announcement",
    description: "Winners announcement and awards ceremony",
    startDate: new Date("2025-03-21T09:00:00.000Z"),
    endDate: new Date("2025-03-21T17:00:00.000Z"),
    type: "ANNOUNCEMENT",
    isActive: false,
  },
];

async function main() {
  console.log("🌱 Starting seed process...");

  // Create default admin if doesn't exist
  const existingAdmin = await prisma.admin.findUnique({
    where: { email: defaultAdmin.email },
  });

  if (!existingAdmin) {
    const hashedPassword = await bcrypt.hash(defaultAdmin.password, 10);

    await prisma.admin.create({
      data: {
        ...defaultAdmin,
        password: hashedPassword,
      },
    });

    console.log(`✅ Admin created: ${defaultAdmin.email}`);
    console.log(
      `⚠️  Default password: ${defaultAdmin.password} - PLEASE CHANGE THIS!`,
    );
  } else {
    console.log(`⚠️  Admin already exists: ${defaultAdmin.email}`);
  }

  // Create default timelines
  for (const timeline of defaultTimelines) {
    const existingTimeline = await prisma.timeline.findFirst({
      where: {
        title: timeline.title,
        type: timeline.type,
      },
    });

    if (!existingTimeline) {
      await prisma.timeline.create({
        data: timeline,
      });
      console.log(`✅ Timeline created: ${timeline.title}`);
    } else {
      console.log(`⚠️  Timeline already exists: ${timeline.title}`);
    }
  }

  console.log("🎉 Seed process completed!");
}

main()
  .catch((error) => {
    console.error("❌ Seed process failed:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
