var main = {

    init: function() {
        var _this = this;

        // 저장 버튼 클릭시
        $('#btn-save').on('click', () => {
            _this.save();
        });

        // 수정 버튼 클릭시
        $('#btn-update').on('click', () => {
            _this.update();
        })

    },
    save: () => {
        var data = {
            title: $('#title').val(),
            author: $('#author').val(),
            content: $('#content').val()
        }

        $.ajax({
            type: 'POST',
            url: '/api/v1/posts',
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(data)
        }).then(() => {
            alert('글이 등록되었습니다.');
            this.location.href = '/';
        }).fail((err) => {
            alert(JSON.stringify(err))
        });
    },
    update: () => {
        var data = {
            title: $('#title').val(),
            content: $('#content').val()
        };

        var id = $('#id').val();

        $.ajax({
            type: 'PUT',
            url: '/api/v1/posts/' + id,
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(data)
        }).done(() => {
            alert('내용이 수정되었습니다.');
            this.location.href = '/';
        }).fail((err) => {
            alert(JSON.stringify(err))
        });
    }
};

main.init();