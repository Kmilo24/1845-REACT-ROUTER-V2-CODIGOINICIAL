import  image from '../assets/img/404.png';
import '../assets/css/404.css';

const Page404 = () => {
    return (
        <main className="container flex flex--center flex--column">
            <img className='dog-image' src={image} alt='Doguito'/>
            <p className='notfound-text'>Ops, essa página não existe!</p>
        </main>
    );
}
export default Page404;
