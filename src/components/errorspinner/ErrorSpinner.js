import { Dna } from  'react-loader-spinner';

const ErrorSpinner = (error, loading) => {
  
if (error) {
  return (
    <div>        
        Oops!
        {' '}
        {error}
        !       
    </div>
  );
}
if (loading) {
  return (
    <Dna
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper" />
  );
}}
export default ErrorSpinner;