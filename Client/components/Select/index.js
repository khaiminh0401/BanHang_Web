import Select from '@atlaskit/select';
const SelectCustom = ({data,title}) => {
    return (
        <div className='mx-2 d-flex align-items-center'>
            <label htmlFor="single-select-example" className='mx-2'>{title}</label>
            <Select
                inputId="single-select-example"
                className="single-select"
                classNamePrefix="react-select"
                isClearable={true}
                options={data}
                placeholder="Choose a city"
            />
        </div>

    );
}
export default SelectCustom;