import FormSelector from "../Selectors/FormSelector/FormSelector";
import PriceSelect from "../Selectors/PriceSelect/PriceSelect";
import RowSelector from "../Selectors/RowSelector/RowSelector";
import {workFilter} from "./work_filter.module.scss"

const WorkFilter = () => {
    return (
        <>
            <div className={workFilter}>
                <RowSelector name={'workType'} items={[
                    {value: 'For work', text: 'for work'},
                    {value: 'For an employee', text: 'for an employee'},
                ]} defaultValueIndex={0} style={{gridArea: 'type'}} />
                <FormSelector name={'employment'} holder={'Employment'} items={[
                    {value: 'Full time', text: 'Full time'},
                    {value: 'Partial', text: 'Partial'},
                    {value: 'Remote', text: 'Remote'},
                ]} />
                <PriceSelect name={'cost'} holder={'Salary'} />
            </div>  
        </>
    );
}

export default WorkFilter;