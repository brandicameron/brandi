export default function ProjectBtn({ href, title, ariaLabel }) {
  return (
    // styles are in globals.css
    <a href={href} className='btn' target='blank' title={title} aria-label={ariaLabel}>
      <span className='btn-shadow'></span>
      <span className='btn-front'>
        {title}{' '}
        <img
          alt=''
          src={title === 'Live' ? '/images/icons/new-window.svg' : '/images/icons/github-icon.svg'}
          width={25}
          height={25}
          className='icon'
        />
      </span>
    </a>
  );
}
