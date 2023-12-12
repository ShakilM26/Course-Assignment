function info(name, job_title, salary, company){
  this.name = name;
  this.job_title = job_title;
  this.salary = salary;
  this.company = company;
  this.showme = function(){
    console.log(this.name);
    console.log(this.job_title);
    console.log(this.salary);
    console.log(this.company);
  }
}
var shakil = new info('Shakil','Data Engineer',22000,'Google');
shakil.showme();