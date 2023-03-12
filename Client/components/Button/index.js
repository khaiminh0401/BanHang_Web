import Button from '@atlaskit/button';
function CustomButton({appearance,text,width}) {
    return ( 
        <Button appearance={appearance} style={{backgroundColor:"#C8D5CB",color:"white !important", width:width}}>{text}</Button>
     );
}

export default CustomButton;