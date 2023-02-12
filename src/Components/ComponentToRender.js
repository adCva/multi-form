import AddOns from './AddOns';
import PersonalInfo from './PersonalInfo';
import Plan from './Plan';
import Summary from './Summary';
import Thanks from './Thanks';


function determineComponent(componentToRender) {
    switch (componentToRender) {
      case 1:
        return <PersonalInfo />;
      case 2:
        return <Plan />;
      case 3:
        return <AddOns />;
      case 4:
        return <Summary />;
      case 5:
        return <Thanks />;
      default:
        return <PersonalInfo />;
    }
}


export default determineComponent;