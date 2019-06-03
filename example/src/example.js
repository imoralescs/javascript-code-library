import './example.scss';

const createExampleLink = () => {
    const link = document.createElement('a');
    link.innerHTML = 'Example with Webpack';
    link.href = 'https://www.google.com/';
    link.target = '_blank';
    link.classList = 'example';
    return link;
};

export default createExampleLink;