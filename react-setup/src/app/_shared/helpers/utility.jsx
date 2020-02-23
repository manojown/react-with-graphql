const paginateJob = (jobs, pageNumber, countPerPage) => {
  let start = (pageNumber - 1) * countPerPage;
  let end = start + countPerPage;
  let d = jobs.slice(start, end);
  return d;
};
const searchJobsByExp = (jobs, keyword) => {
  return jobs.filter(job => {
    let myExp = parseInt(keyword);
    let expRange = job.experience.match(/\d+/g); // sxtract digit from pattern

    if (expRange && expRange.length > 1) {
      let minExp = parseInt(expRange[0]);
      let maxExp = parseInt(expRange[1]);
      if (myExp >= minExp && myExp <= maxExp) return job;
    } else if (expRange) {
      let minExp = parseInt(expRange[0]);
      if (myExp === minExp) return job;
    }
    return false;
  });
};
const searchJobsByLoc = (jobs, keyword) => {
  keyword = keyword.toLowerCase();
  let types = keyword.split(" ");
  //   console.log("types", types);
  return jobs.filter(job => {
    for (let i in types) {
      if (types[i]) {
        if (job.location.toLowerCase().includes(types[i]) > 0) return job;
      }
    }
    return false;
  });
};
const expireJobs = (jobs, keyword) => {
  return jobs.filter(job => {
    if (keyword === "true") {
      if (job.enddate && Date.parse(job.enddate) <= Date.parse(new Date())) {
        return job;
      }
      return false;
    } else return job;
  });
};
const searchByCompanyName = (jobs, keyword) => {
  keyword = keyword.toLowerCase();

  return jobs.filter(job => {
    if (job.companyname.toLowerCase().includes(keyword) > 0) return job;
    return false;
  });
};
const searchJobsBySkills = (jobs, keyword) => {
  keyword = keyword.toLowerCase();

  let types = keyword.split(" "); // handle multipale location

  return jobs.filter(job => {
    for (let i in types) {
      if (types[i]) {
        if (job.skills.toLowerCase().includes(types[i]) > 0) return job;
      }
    }
  });
};

const search = (jobs, query) => {
  let jobsAre = jobs;

  if (query.expire) jobsAre = expireJobs(jobsAre, query.expire);

  if (query.company) jobsAre = searchByCompanyName(jobsAre, query.company);

  if (query.exp) jobsAre = searchJobsByExp(jobsAre, query.exp);

  if (query.skills) jobsAre = searchJobsBySkills(jobsAre, query.skills);

  if (query.loc) jobsAre = searchJobsByLoc(jobsAre, query.loc);

  if (!jobsAre) return jobs;
  return jobsAre;
};

export default {
  paginateJob,
  searchJobsByExp,
  searchJobsByLoc,
  search,
  searchJobsBySkills,
  searchByCompanyName,
  expireJobs
};
