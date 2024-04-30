import LoginComponent from './components/Login';

export default function LoginView() {
  return (
    <div className='flex items-center w-full h-full'>
      <div className='p-8 w-2/3 h-full flex flex-col justify-center bg-background gap-4'>
        <p className='text-6xl text-primary'>ChatApp</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          ullamcorper magna sapien, eu pharetra augue viverra sit amet.
          Suspendisse iaculis est ante, ut consequat dui aliquet quis. Integer
          nec massa dictum, dapibus justo et, tempor magna. Vestibulum ultrices
          eget nisi non pretium. Proin dapibus felis eu mollis dapibus. Mauris
          ut mi lacus. Nulla facilisi. Etiam finibus nunc pretium libero
          volutpat dictum. Morbi molestie nulla dui, quis ultricies libero
          vestibulum eget. Morbi lacinia justo eu nibh bibendum gravida. Nulla
          ipsum elit, ornare nec eleifend quis, ultricies vel ipsum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <LoginComponent />
    </div>
  );
}
