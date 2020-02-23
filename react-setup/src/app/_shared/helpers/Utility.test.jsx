import Utility from "./utility";

describe("Utility Function Load", () => {
  it("Pagination feature without errors", () => {
    // single entry per pagination
    expect(Utility.paginateJob(MockData.jobs, 1, 1).length).toEqual(1);
    // double entry per pagination
    expect(Utility.paginateJob(MockData.jobs, 1, 2).length).toEqual(2);
    // second page where no entry exist
    expect(Utility.paginateJob(MockData.jobs, 2, 2).length).toEqual(0);
  });

  it("searchJobs By Experience feature without errors", () => {
    // with 5 year experience required job
    expect(Utility.searchJobsByExp(MockData.jobs, 5).length).toEqual(2);
    // with 1 year experience required job which not exist
    expect(Utility.searchJobsByExp(MockData.jobs, 1).length).toEqual(0);
    // with 11 year experience required job
    expect(Utility.searchJobsByExp(MockData.jobs, 11).length).toEqual(1);
  });

  it("searchJobs By Skills feature without errors", () => {
    expect(
      Utility.searchJobsBySkills(MockData.jobs, "Visualizations").length
    ).toEqual(2);
    // with start keyword
    expect(
      Utility.searchJobsBySkills(MockData.jobs, " cassa  ").length
    ).toEqual(1);
    // while no skills exist
    expect(
      Utility.searchJobsBySkills(MockData.jobs, " node.js ").length
    ).toEqual(0);
    // multiple skills search
    expect(
      Utility.searchJobsBySkills(MockData.jobs, "cassandra data").length
    ).toEqual(2);
  });

  it("searchJobs By Locations feature without errors", () => {
    // with capitalization
    expect(Utility.searchJobsByLoc(MockData.jobs, "Mumbai").length).toEqual(1);
    // with start keyword
    expect(Utility.searchJobsByLoc(MockData.jobs, " benga ").length).toEqual(1);
    // while no location exist
    expect(Utility.searchJobsByLoc(MockData.jobs, " Pune ").length).toEqual(0);
    // multiple location search
    expect(
      Utility.searchJobsByLoc(MockData.jobs, "mumbai benga").length
    ).toEqual(2);
  });

  it("searchJobs By Company Name feature without errors", () => {
    // with lowercase
    expect(
      Utility.searchByCompanyName(MockData.jobs, " morgan ").length
    ).toEqual(1);
    // with capitalization
    expect(
      Utility.searchByCompanyName(MockData.jobs, " Morgan ").length
    ).toEqual(1);
    // where exist two Consultancy company
    expect(
      Utility.searchByCompanyName(MockData.jobs, " Consultancy ").length
    ).toEqual(2);

    // not found any job in this company
    expect(
      Utility.searchByCompanyName(MockData.jobs, " styam system ").length
    ).toEqual(0);
  });

  it("expire Jobs  feature without errors", () => {
    expect(Utility.expireJobs(MockData.jobs, "true").length).toEqual(1);
    expect(Utility.expireJobs(MockData.jobs, false).length).toEqual(2);
  });
});
let MockData = {
  jobs: [
    {
      _id: "5b2b8a9e263a5020388e87eb",
      title: "Software Engineer - Visualization Developer",
      applylink:
        "https://www.techgig.com/jobs/Software-Engineer-Visualization-Developer/59838",
      jd: "",
      companyname: "JP Morgan Consultancy Chase Bank",
      location: "Mumbai",
      experience: "5-12 yrs",
      salary: "",
      type: "",
      skills: "Data Visualizations",
      startdate: "",
      enddate: "2018-08-25 00:00:00",
      created: "",
      source: "techgig",
      timestamp: 1528959791.958316,
      __v: 0
    },
    {
      _id: "5b2b8a9e263a5020388e87ec",
      title: "Senior Knowledge Analyst CKA",
      applylink:
        "https://www.techgig.com/jobs/Senior-Knowledge-Analyst-CKA/59843",
      jd: "",
      companyname: "Boston Consultancy Group",
      location: "Bengaluru/Bangalore",
      experience: "2-6 yrs",
      salary: "",
      type: "",
      skills: "cassandra,Visualizations",
      startdate: "",
      enddate: new Date().setDate(new Date().getDate() + 1),
      created: "",
      source: "techgig",
      timestamp: 1528959791.958316,
      __v: 0
    }
  ]
};
