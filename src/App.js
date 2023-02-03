import "./App.css";
import Profile from "./Componant/Profile/Profile";

function App() {
  function show(message) {
    alert(message);
  }
  return (
    <div className="container">
      <Profile
        myimage="https://scontent.ftun1-2.fna.fbcdn.net/v/t39.30808-6/275877106_3141323186109345_1090896278612265546_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=sg3flHu6MKcAX9E5wjC&_nc_oc=AQnNbTUIgGO11qcPWe0LlssOZ7bJShR05QC2u67kxv-wkz0WaQGcv6bY1MbLpYNowfc&_nc_ht=scontent.ftun1-2.fna&oh=00_AfAieZ2sXVXYvHcK9SE-EaDd_AdNPTjO_7hAeW1cF2uBeg&oe=63E10808"
        fullname="MOKRANI Mohamed"
        bio="11/03/1996"
        profession="FullStack developper"
        show={show}
      />
    </div>
  );
}

export default App;
