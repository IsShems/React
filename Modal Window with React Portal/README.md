# React Portal: Modal Window
Goal: Create a modal window that displays on top of all content using React Portal.


# Tasks:
1. Create a Modal component that will accept the following props: isOpen
   (a boolean value indicating whether the modal window is open or not)
   and onClose (a function that will be called when the modal window is closed).
2. Using React Portal, render a modal window inside an element with id modal-root that is outside the main root
   element of your application.
3. The modal window must contain a close button. When you click on this button or area outside the modal window,
   it should close.
4. Ensure that the modal window is displayed correctly on top of the main content using CSS
   (for example, using position: fixed and z-index).
