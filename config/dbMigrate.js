const connection = require("./dbConn");
const User = require("../src/models/user.model");
const BloodType = require("../src/models/btype.model");
const Department = require("../src/models/department.model");
const Attendance = require("../src/models/attendance.model");
const Gender = require("../src/models/gender.model");
const Image = require("../src/models/image.model");
const dbAssociation = require("../src/models/index");
const moment = require("moment");
const dotenv = require("dotenv");
const bcrypt = require("bcryptjs");

dotenv.config();
const dbMigrate = async () => {
  dbAssociation();
  await connection.sync({ force: true });
  const image1 = await Image.create({
    path: `images/test.jpg`,
    type: "profile",
  });
  const hashedPass = bcrypt.hashSync("admin", 10);
  const btype1 = await BloodType.create({ type: "A", id: 0 });
  const btype2 = await BloodType.create({ type: "B", id: 0 });
  const btype3 = await BloodType.create({ type: "O", id: 0 });
  const btype4 = await BloodType.create({ type: "AB", id: 0 });

  const depart1 = await Department.create({ name: "Faculty of Law", businessId: "A01" });
  const depart2 = await Department.create({ name: "Faculty of Econimics and Business", businessId: "A02" });
  const depart3 = await Department.create({ name: "Faculty of Engineering", businessId: "A03",});
  const depart4 = await Department.create({ name: "Faculty of Medicine", businessId: "A04",});
  const depart5 = await Department.create({ name: "Faculty of Animal and Agricultural Sciences", businessId: "A05",});
  const depart6 = await Department.create({ name: "Faculty of Humanities", businessId: "A06",});
  const depart7 = await Department.create({ name: "Faculty of Social Science and Political Science", businessId: "A07",});
  const depart8 = await Department.create({ name: "Faculty of Science and Mathematics", businessId: "A08",});
  const depart9 = await Department.create({ name: "Faculty of Public Health", businessId: "A09",});
  const depart10 = await Department.create({ name: "Faculty of Fisheries and Marine Sciences", businessId: "A010",});
  const depart11 = await Department.create({ name: "Faculty of Psychology", businessId: "A011",});

  const gender1 = await Gender.create({ gender: "Male", id: 0 });
  const gender2 = await Gender.create({ gender: "Female", id: 0 });

  const user1 = await User.create({
    nfcId: "A0353400E200001965170049",
    name: "Zayn Javadd Malik",
    birth: "1993-01-12",
    email: "zayn.malik@gmail.com",
    phone: "08986995760",
    livingPartner: "Chemical Engineering",
    password: hashedPass,
  });

  await user1.setBloodType(btype4);
  await user1.setDepartment(depart3);
  await user1.setGender(gender1);
  await user1.setImage(image1);

  const user2 = await User.create({
    name: "Harry Edward Styles",
    nfcId: "97E03400E200001965170239",
    birth: "1994-02-01",
    email: "harry.styles@gmail.com",
    phone: "089883795760",
    livingPartner: "Architectural Engineering",
    password: hashedPass,
  });

  await user2.setBloodType(btype1);
  await user2.setDepartment(depart3);
  await user2.setGender(gender1);
  await user2.setImage(image1);

  const user3 = await User.create({
    name: "Louis William Tomlinson",
    nfcId: "B06C3000E200001965170151",
    birth: "1991-12-24",
    email: "louis.tomlinson@gmail.com",
    phone: "08986783623",
    livingPartner: "Computer Engineering",
    password: hashedPass,
  });

  await user3.setBloodType(btype2);
  await user3.setDepartment(depart3);
  await user3.setGender(gender2);
  await user3.setImage(image1);

  const user4 = await User.create({
    name: "Niall James Horan",
    nfcId: "A4543400E200001965170147",
    birth: "1993-09-13",
    email: "niall.horan@gmail.com",
    phone: "08986938760",
    livingPartner: "Civil Engineering",
    password: hashedPass,
  });

  await user4.setBloodType(btype3);
  await user4.setDepartment(depart4);
  await user4.setGender(gender1);
  await user4.setImage(image1);

  const user5 = await User.create({
    name: "Liam James Payne",
    nfcId: "218A3000E200001965170273",
    birth: "1993-08-29",
    email: "liam.payne@gmail.com",
    phone: "089868463923",
    livingPartner: "Electrical Engineering",
    password: hashedPass,
  });

  await user5.setBloodType(btype1);
  await user5.setDepartment(depart3);
  await user5.setGender(gender1);
  await user5.setImage(image1);

  const user6 = await User.create({
    name: "Daniel James Seavey",
    birth: "1999-04-02",
    email: "daniel.seavey@gmail.com",
    phone: "089868463923",
    livingPartner: "Geodesy Engineering",
    password: hashedPass,
  });

  await user6.setBloodType(btype1);
  await user6.setDepartment(depart3);
  await user6.setGender(gender1);
  await user6.setImage(image1);

  const user7 = await User.create({
    name: "Zachary Dean Herron",
    birth: "2001-05-27",
    email: "zach.herron@gmail.com",
    phone: "089868463923",
    livingPartner: "Geological Engineering",
    password: hashedPass,
  });

  await user7.setBloodType(btype1);
  await user7.setDepartment(depart3);
  await user7.setGender(gender1);
  await user7.setImage(image1);

  const user8 = await User.create({
    name: "Corbyn Matthew Besson",
    birth: "1998-11-25",
    email: "corbyn.besson@gmail.com",
    phone: "089868463923",
    livingPartner: "Industrial Engineering",
    password: hashedPass,
  });

  await user8.setBloodType(btype1);
  await user8.setDepartment(depart3);
  await user8.setGender(gender1);
  await user8.setImage(image1);

  const user9 = await User.create({
    name: "Jonah Marais Roth Frantzich",
    birth: "1998-06-16",
    email: "jonah.marais@gmail.com",
    phone: "089868463923",
    livingPartner: "Environmental Engineering",
    password: hashedPass,
  });

  await user9.setBloodType(btype1);
  await user9.setDepartment(depart3);
  await user9.setGender(gender1);
  await user9.setImage(image1);

  const user10 = await User.create({
    name: "Calum Thomas Hood",
    birth: "1995-01-25",
    email: "calum.hood@gmail.com",
    phone: "089868463923",
    livingPartner: "Mechanical Engineering",
    password: hashedPass,
  });

  await user10.setBloodType(btype1);
  await user10.setDepartment(depart3);
  await user10.setGender(gender1);
  await user10.setImage(image1);

  const user11 = await User.create({
    name: "Luke Robert Hemmings",
    birth: "1996-07-16",
    email: "luke.hemmings@gmail.com",
    phone: "089868463923",
    livingPartner: "Shipping Engineering",
    password: hashedPass,
  });

  await user11.setBloodType(btype1);
  await user11.setDepartment(depart3);
  await user11.setGender(gender1);
  await user11.setImage(image1);

  const users = [user1, user2, user3, user4, user5];

  setTimeout(async () => {
    const abs1 = await Attendance.create({
      date: moment().format("YYYY-MM-DD"),
      time: moment().format("HH:mm:ss"),
      timeOut: moment().format("HH:mm:ss"),
    });
    await abs1.setUser(user1);
    setTimeout(async () => {
      const abs2 = await Attendance.create({
        date: "2020-04-01",
        time: moment().format("HH:mm:ss"),
      });
      await abs2.setUser(user2);
      setTimeout(async () => {
        const abs3 = await Attendance.create({
          date: moment().format("YYYY-MM-DD"),
          time: moment().format("HH:mm:ss"),
          timeOut: moment().format("HH:mm:ss"),
        });
        await abs3.setUser(user3);
        setTimeout(async () => {
          const abs4 = await Attendance.create({
            date: "2020-04-01",
            time: moment().format("HH:mm:ss"),
            timeOut: moment().format("HH:mm:ss"),
          });
          await abs4.setUser(user4);
          setTimeout(async () => {
            const abs5 = await Attendance.create({
              date: moment().format("YYYY-MM-DD"),
              time: moment().format("HH:mm:ss"),
            });
            await abs5.setUser(user5);
            setTimeout(async () => {
              const abs6 = await Attendance.create({
                date: moment().format("YYYY-MM-DD"),
                time: moment().format("HH:mm:ss"),
                timeOut: moment().format("HH:mm:ss"),
              });
              await abs6.setUser(user1);
              setTimeout(async () => {
                const abs7 = await Attendance.create({
                  date: moment().format("YYYY-MM-DD"),
                  time: moment().format("HH:mm:ss"),
                });
                await abs7.setUser(user1);
                setTimeout(async () => {
                  const abs8 = await Attendance.create({
                    date: moment().format("YYYY-MM-DD"),
                    time: moment().format("HH:mm:ss"),
                  });
                  await abs8.setUser(user4);

                  let x = 0;
                  for (i = 0; i < 100; i++) {
                    setTimeout(async () => {
                      await Attendance.create({
                        date: moment().format(`2020-04-0${x + 1}`),
                        time: moment().format("HH:mm:ss"),
                        timeOut: moment().format("HH:mm:ss"),
                        userId: users[x].id,
                      });
                      if (x >= users.length - 1) {
                        x = 0;
                      } else x++;
                    }, i * 150);
                  }
                }, 2000);
              }, 2000);
            }, 2000);
          }, 2000);
        }, 2000);
      }, 2000);
    }, 2000);
  }, 2000);
};

dbMigrate();

module.exports = dbMigrate;
