import * as React from 'react'
import { storiesOf } from '@storybook/react'

import { EditorStory } from '../src'

storiesOf('Plugins/Text', module)
  .add('Initial State', () => {
    const state = {
      plugin: 'rows'
    }

    return <EditorStory defaultPlugin="text" initialState={state} />
  })
  .add('Prefilled', () => {
    const state = JSON.parse(
      '{"plugin":"rows","state":[{"plugin":"text","state":{"object":"value","document":{"object":"document","data":{},"nodes":[{"object":"block","type":"paragraph","data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"some ","marks":[]}]},{"object":"inline","type":"@splish-me/a","data":{"href":"https://www.example.com"},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"link","marks":[]}]}]},{"object":"text","leaves":[{"object":"leaf","text":", ","marks":[]},{"object":"leaf","text":"bold","marks":[{"object":"mark","type":"@splish-me/strong","data":{}}]},{"object":"leaf","text":" and ","marks":[]},{"object":"leaf","text":"italic","marks":[{"object":"mark","type":"@splish-me/em","data":{}}]},{"object":"leaf","text":" text.  Try using hotkeys for bold (Ctrl / Cmd + B) and italic (Ctrl /Cmd + I) and opening the overlay by selecting a link and pressing Enter key.","marks":[]}]}]}]}}}]}'
    )

    return <EditorStory defaultPlugin="text" initialState={state} />
  })
  .add('Prefilled long Text', () => {
    const state = JSON.parse(
      '{"plugin":"rows","state":[{"plugin":"text","state":{"object":"value","document":{"object":"document","data":{},"nodes":[{"object":"block","type":"paragraph","data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"Cupcake ipsum dolor sit amet fruitcake candy pastry. Gummi bears candy canes brownie. Chocolate bear claw lemon drops lemon drops tootsie roll oat cake candy canes lemon drops chocolate. Apple pie cookie marshmallow cake jelly-o tart bonbon pudding. Soufflé cake sugar plum sugar plum toffee cheesecake cupcake. Gingerbread gummies gummi bears bonbon. Biscuit ice cream halvah chupa chups powder. Fruitcake gingerbread caramels cheesecake gummies. Macaroon tiramisu sweet. Lollipop chocolate carrot cake cheesecake carrot cake cake. Sweet roll tart cotton candy gummi bears bonbon macaroon. Candy canes caramels fruitcake icing topping bonbon tiramisu. Cookie sesame snaps toffee pie jelly-o marzipan halvah chocolate liquorice. Cheesecake sweet roll ice cream cake sesame snaps toffee candy canes chocolate cake.","marks":[]}]}]}]}}},{"plugin":"text","state":{"object":"value","document":{"object":"document","data":{},"nodes":[{"object":"block","type":"paragraph","data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"Donut powder jelly-o. Apple pie candy canes cookie gingerbread tiramisu caramels. Chupa chups caramels muffin chupa chups marzipan. Chupa chups cookie jelly-o danish bear claw cotton candy donut sweet. Candy candy canes oat cake. Sweet tart candy canes donut bonbon topping. Tart toffee bonbon croissant. Bear claw toffee topping danish donut. Oat cake cookie carrot cake chocolate bar muffin. Soufflé croissant fruitcake chocolate bar tart cake wafer. Candy canes cake danish marzipan danish apple pie. Candy canes gummi bears jelly beans chocolate bar croissant candy tart. Oat cake toffee cookie biscuit lemon drops brownie fruitcake bear claw apple pie.","marks":[]}]}]}]}}},{"plugin":"text","state":{"object":"value","document":{"object":"document","data":{},"nodes":[{"object":"block","type":"paragraph","data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"Bonbon sweet roll pastry jelly dragée muffin lollipop. Marzipan bonbon cake topping pie danish.","marks":[]}]}]}]}}},{"plugin":"text","state":{"object":"value","document":{"object":"document","data":{},"nodes":[{"object":"block","type":"paragraph","data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"Chocolate marshmallow lemon drops cotton candy topping candy. Muffin dragée sesame snaps oat cake powder. Pudding jelly beans cookie pie liquorice pie. Liquorice topping halvah apple pie cake donut dragée. Marshmallow gummies lemon drops gummies. Ice cream caramels pastry cookie biscuit gingerbread dessert dragée. Jelly beans jujubes jujubes chocolate bar cotton candy dessert jujubes tart gummi bears. Jelly-o tart soufflé pudding cotton candy ice cream caramels. Lollipop chocolate bar sweet jelly sweet. Jelly apple pie sesame snaps jelly-o. Candy sugar plum fruitcake topping dragée. Brownie gingerbread sweet roll carrot cake cotton candy bonbon dragée soufflé carrot cake.","marks":[]}]}]}]}}},{"plugin":"text","state":{"object":"value","document":{"object":"document","data":{},"nodes":[{"object":"block","type":"paragraph","data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":" Macaroon carrot cake lollipop donut chupa chups croissant chocolate cake. Bear claw marshmallow caramels gummi bears bonbon. Sugar plum jelly tart donut chocolate bar gingerbread icing lemon drops. Jelly beans cake danish cheesecake. Oat cake jujubes pudding cake chocolate bar carrot cake. Cupcake tiramisu dessert. Lemon drops caramels brownie sweet chupa chups cheesecake gummies toffee jelly-o. Tart sesame snaps lemon drops wafer biscuit. Dessert biscuit candy chocolate bar cake donut carrot cake pudding. Muffin fruitcake cookie topping pudding. Soufflé gummies brownie tootsie roll bonbon. Cupcake powder icing cake halvah biscuit apple pie oat cake halvah.","marks":[]}]}]}]}}}]}'
    )

    return <EditorStory defaultPlugin="text" initialState={state} />
  })
