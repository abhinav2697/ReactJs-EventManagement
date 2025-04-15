import PageContent from "../components/PageContent";

function HomePage() {
  let imgUrl='https://t4.ftcdn.net/jpg/02/16/94/65/360_F_216946587_rmug8FCNgpDCPQlstiCJ0CAXJ2sqPRU7.jpg';
    return <PageContent title="Welcome!">
    <p>Browse all our amazing events!</p>
    <img src={imgUrl} alt="event" style={{borderRadius:'105px 30px',overflow:'hidden',}}/>
    </PageContent>
  }
  
  export default HomePage;