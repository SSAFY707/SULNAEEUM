import React from 'react'

const Example: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row bg-gray-100">
      <div className="md:w-1/2 bg-gray-200 p-4">
        <h2 className="text-2xl font-bold mb-4">Left Column</h2>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, elit eu congue lacinia, est enim interdum turpis, a pulvinar massa nibh vitae mauris. Fusce sed elit euismod, sagittis nulla in, laoreet justo. Donec feugiat enim vitae diam tincidunt, a malesuada velit facilisis. Sed vel hendrerit nisl. Donec posuere sapien ac sem euismod, nec auctor ipsum suscipit. Duis auctor odio at ex pulvinar, vel dictum odio venenatis. Duis blandit vel velit sit amet egestas. Nullam porttitor, velit vel molestie hendrerit, nibh tortor consectetur risus, vitae blandit arcu justo nec sapien. Sed vel luctus turpis. Sed at erat in nulla interdum tincidunt vel et dolor. Aenean gravida mauris enim, nec vestibulum turpis tempus id.
        </p>
      </div>
      <div className="md:w-1/2 bg-gray-300 p-4">
        <h2 className="text-2xl font-bold mb-4">Right Column</h2>
        <p className="text-gray-700">
          Vivamus quis purus eget lacus malesuada consequat. Curabitur vel odio non ipsum scelerisque bibendum. In vel sapien eu elit tincidunt egestas vel ut justo. Duis at ultricies mi. Pellentesque non malesuada elit, sit amet sollicitudin nisi. Nullam rhoncus justo ac orci euismod, in convallis ipsum eleifend. Sed luctus leo eu mi elementum convallis. Duis euismod a nunc in pellentesque. Sed euismod risus vel ipsum iaculis pulvinar.
        </p>
        <p className="text-gray-700">
          Quisque euismod, risus nec elementum eleifend, ipsum elit pulvinar elit, vel lobortis velit arcu in lorem. Curabitur posuere tincidunt tellus, at malesuada nibh tincidunt ac. In hac habitasse platea dictumst. Praesent pulvinar, mi non interdum porttitor, nisl elit dapibus odio, in pharetra velit velit quis augue. Morbi pharetra erat quis ligula imperdiet lacinia. Integer aliquet neque a congue malesuada. Fusce vehicula blandit dapibus. Sed vel velit eu eros interdum varius. Aenean commodo, enim vel faucibus ultrices, est nulla auctor nibh, vel pulvinar velit metus at odio.
        </p>
      </div>
    </div>
  )
}

export default Example