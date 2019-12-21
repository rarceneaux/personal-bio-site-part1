import utils from '../../helpers/utils';


const bioString = () => {
  let domString = '';
  domString += '<img  id="me" src="https://img1.wsimg.com/isteam/ip/b11d58fa-2b9e-47b0-b4ba-a33bacfaed92/Screen%20Shot%202019-09-16%20at%2012.41.30%20AM.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25" alt=""/>';
  domString += '<p> I was born and rasied in Nashville, TN. Prior to NSS, I received both my BBA and MBA with an emphasis in Finance from MTSU.';
  domString += '<p>I have an combined 20 years of experience in banking and real estate. Today, I am pursue a career in coding to one day teach it to the youth in an after school program type of community initiative.</p>';
  utils.printToDom('bioPage', domString);
};


export default { bioString };
