/// <references types="houdini-svelte">

/** @type {import('houdini').ConfigFile} */
const config = {
    "plugins": {
        "houdini-svelte": {}
    },
    scalars: {
        // the name of the scalar we are configuring
        Email: {
            type: 'String'
        }
    }
}

export default config
