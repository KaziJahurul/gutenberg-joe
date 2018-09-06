(function (wp) {
    var __ = wp.i18n;
    var registerBlockType = wp.blocks.registerBlockType;
    var RichText = wp.editor.RichText;
    var el = wp.element.createElement;

    registerBlockType( 'joe/myfirstblock', {
        title: 'MyFirstBlock',
        icon: 'admin-appearance',
        category: 'common',
        attributes: {
            content: {
                type: 'array',
                source: 'children',
                selector: 'p'
            }
        },
        edit: function(props) {
            var content = props.attributes.content;
            function onChangeContent( newContent ) {
                props.setAttributes({ content: newContent });
            }
            return el( RichText, {
                tagName: 'p',
                className: props.className,
                onChange: onChangeContent,
                value: content
            });
        },

        save: function(props) {
            var content = props.attributes.content;
            return el( RichText.Content, {
                tagName: 'p',
                className: props.className,
                value: content
            });
        }
    } );
})(window.wp);