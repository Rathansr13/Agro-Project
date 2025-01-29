import { memo } from 'react';

const Announcement3Icon = (props) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M16.5 13C18.433 13 20 10.0899 20 6.5C20 2.91015 18.433 0 16.5 0M16.5 13C14.567 13 13 10.0899 13 6.5C13 2.91015 14.567 0 16.5 0M16.5 13L3.44354 10.6261C2.51605 10.4575 2.05231 10.3731 1.67733 10.189C0.91447 9.81423 0.34636 9.13351 0.114145 8.31593C0 7.91405 0 7.4427 0 6.5C0 5.5573 0 5.08595 0.114145 4.68407C0.34636 3.86649 0.91447 3.18577 1.67733 2.81105C2.05231 2.62685 2.51605 2.54254 3.44354 2.3739L16.5 0M3 11L3.39386 16.514C3.43126 17.0376 3.44996 17.2995 3.56387 17.4979C3.66417 17.6726 3.81489 17.8129 3.99629 17.9005C4.20232 18 4.46481 18 4.98979 18H6.7722C7.37234 18 7.67242 18 7.89451 17.8803C8.08966 17.7751 8.24434 17.6081 8.33423 17.4055C8.43653 17.1749 8.41351 16.8757 8.36748 16.2773L8 11.5'
      stroke='black'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export default Announcement3Icon;
// const Memo = memo(Announcement3Icon);
// export { Memo as Announcement3Icon };
