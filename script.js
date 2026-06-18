document.addEventListener("DOMContentLoaded", () => {
    // ==========================================
    // CƠ SỞ DỮ LIỆU LƯU BÚT
    // ==========================================
    // CÁCH THÊM MỘT NGƯỜI BẠN MỚI:
    // 1. Copy nguyên cụm mẫu (đã bị comment mờ) ở dưới cùng.
    // 2. Mở comment ra, đổi ID và điền thông tin của người đó vào.
    // 3. Đảm bảo giữa các người bạn có dấu phẩy (,) ngăn cách.
    // ==========================================
    const memoryDatabase = {
        "Tâm Anh 20/11": {
            name: "Tâm Anh",
            // Link ảnh: có thể là tên file ảnh (nằm chung thư mục) hoặc link trên mạng
            image: "anh/tamanh.jpg",
            message: "Gửi em gái Tâm Anh,\n\n Tính ra ngay từ lần gặp đầu tiên, em và anh mỗi người đều chẳng để ý tới nhau đâu nhỉ, đâu đó đến mãi khi làm 20/11 anh mới có dịp được tiếp xúc với e. Lúc đó anh đang làm đồ rất là chăm chú thì tự nhiên thấy vậy. Bản năng của anh thì cx hay quan tâm nên a đi mua băng cá nhân cho e hihi. Cơ duyên tình cờ đó đã khiến cho anh với e có thể có cơ hội được biết đến nhau nè. \n\n Sắp tới thì anh cũng lên đại học rồi, không còn gặp e với mấy bn trong Hạc nữa đâu. Nên là nhớ phải học thật giỏi và duy trì câu lạc bộ giúp a với nhe. Cảm ơn e vì món quà siu cute và dễ thương hồi bế giảng nè, nhớ phải sống tốt và toả sáng trên phiên bản tốt nhất mà bản thân theo đuổi nhé✨",
            quotes: [
                "Em có còn nhớ hồi 20/11 hong?",
                "Em có còn nhớ hồi bế giảng hong",
                "Sống tốt nhé e, thanh xuân tươi đẹp ở trường Lê ngắn lắm đấy"
            ],
            finalLetter: "Tâm Anh à,\n\nCó những người vội bước qua nhau như cơn gió. Nhưng món quà e dành tặng cho anh đã tiếp thêm rất nhiều ý chí để anh có thể hoàn thành tốt kì thi tốt nghiệp thpt. Chúc e tương lai sẽ luôn rộng mở và sẽ có được một anh ny tinh tế và hết mực yêu thương mình nhé, cảm ơn vì lưu bút, cảm ơn vì món quà và cảm ơn vì đã là một người trong hành trình trưởng thành của anh\n\nKý tên: anh Trí ."
        },

        "Nhật Anh best fen ": {
            name: "Nhật Anh",
            // Link ảnh: có thể là tên file ảnh (nằm chung thư mục) hoặc link trên mạng
            image: "anh/nhatanh.jpg",
            message: "Gửi bạn tui Nhật Anh\n\n  Từ những ngày đầu vào lớp mình, tụi mình đã chơi chung với nhau nhỉ, chả biết tự khi nào mà 2 đứa lại hay chơi chung, hay điện video tâm sự nhỉ. Thời gian 2 đứa còn chơi chung là khoảng thời gian vui nhỉ, cùng nhau hỏi bài nhau, cùng nhau tán gẫu về chuyện yêu đương, cùng nhau học chuyên và hay đặt ra câu hỏi ngu ngơ, và những câu hỏi 'Bài này làm sao m', 'Mày hiểu bài ni không giảng ta với' \n\n Thời gian sắp đến, ta biết m sẽ chọn được ngành và trường yêu thích của m ở Hồ Chí Minh thoi, nhưng dù có học ở đâu thì chúc m sẽ thành công trên con đường mình chọn nhé! Sau này có nhớ ta thì mở lại link lưu bút của ta mà đọc nhé. Cảm ơn vì đã là một phần trong thanh xuân đáng nhớ của ta hihi @@",
            quotes: [
                "Bài ni làm sao m?",
                "Sao m đúng được test đó hay v",
                "Sống tốt nhé cậu, cùng nhau thành công nhé !!!"
            ],
            finalLetter: "Nhật Anh à,\n\nCó những người vội bước qua nhau như cơn gió. Nhưng những kỉ niệm thời học sinh sẽ còn được ghi nhớ mãi trong kí ức của mỗi đứa. Thành công nhé bạn tui!!!\n\nKý tên: Minh Trí ."
        },

        "Nhã Kỳ tri kỉ của Trí": {
            name: "Nhã Kỳ",
            // Link ảnh: có thể là tên file ảnh (nằm chung thư mục) hoặc link trên mạng
            image: "anh/nhaky.jpg",
            message: "Gửi tri kỉ Nhã Kỳ\n\n  Ban đầu tớ định viết lưu bút tay thoi, nma đây là bản web nè, từ cuộc trò chuyện đầu tiên trên tiktok đến cuộc hẹn ở ngoài là khoảng thời gian đáng nhớ nhỉ. Thời gian bên nhau có lẽ là khoảng thời gian cx khá hạnh phúc nhưng cx khá sóng gió, khi 2 đứa không thể cho nhau thêm cơ hội. Rồi bỏ lỡ nhau một cách đáng tiếc. Dù như thế nào thì cậu vẫn là một khoảng thanh xuân đẹp nhất trong hành trình trưởng thành của tớ. Cảm ơn cậu vì những chuỗi ngày cười đùa, những ngày nói chuyện không biết chán. Những lúc giảng bài hăng say cho cậu. Cảm ơn cậu vì tất cả nha \n\n Khoảng thời gian này tớ biết là cậu đang rơi vào rất nhiều luồng suy nghĩ về tương lai, về điểm thi, nhưng hãy tạm gác qua và tận hưởng trọn vẹn kì nghỉ hè, trước khi bước vào giảng đường đại học đầy chông gai và khó khăn này nhé. Cố lên bạn tui, lên kèo rồi tụi mình lại đi chơi nhee! Quý lắm đó hihi@@",
            quotes: [
                "Bạn là ai vậy?",
                "Cho mình xin facebook bạn với",
                "Sống tốt nhé cậu, cùng nhau thành công nhé, cùng là Đà Nẵng có gì khó khăn hãy gọi tớ nhe !!!"
            ],
            finalLetter: "Nhã Kỳ à,\n\nCó những người vội bước qua nhau như cơn gió. Nhưng chúng ta đã may mắn có những kỉ niệm đẹp bên nhau thời học sinh, những khoảnh khắc đó sẽ còn được ghi nhớ mãi trong kí ức của mỗi đứa. Thành công nhé tri kỉ của tui!!!\n\nKý tên: Minh Trí ."
        },

        "Thương đồng run của Trí": {
            name: "Thương",
            // Link ảnh: có thể là tên file ảnh (nằm chung thư mục) hoặc link trên mạng
            image: "anh/hoaithuong.jpg",
            message: "Gửi đồng run Hoài Thương\n\n  Ban đầu tớ định viết lưu bút tay thoi, nma đây là bản web nè. Lớp công nghệ chính là cái lớp khiến cho tui làm quen được người bạn như cậu đó ha. Quả thật thời gian trôi nhanh thật, những ấn tượng ban đầu về cậu khá nhiều. Phải gọi là một cô gái có thể làm rung động bất kì chàng trai nào luôn đó. Rồi cũng tình cờ lại được cậu rủ đi chạy bộ chung ha. Nói chung là những khoảnh khắc đáng nhớ đó sẽ được tớ ghi nhớ rất nhiều đấy. Cảm ơn vì đã là một phần thanh xuân của tớ nha.\n\n Kỳ thi đại học đã qua ròi, dù kết quả có như thế nào thì hãy nhớ là sống đối xử thật tốt với sức khoẻ của mình nhé, và hãy duy trì việc tập luyện thể thao để có được cơ thể khoẻ khoắn như Trí vậy nè, cuối cùng vẫn là một lời hẹn khi cậu mở lại lưu bút online là 'Ít bữa hẹn cậu chạy bộ típ nhé'. Lời mời này sẽ còn mãi đến khi lớn, khi cậu mở lại lưu bút online của tớ hihi. Cuối cùng thì chúc cậu thành công trên con đường mình chọn nhé !!!!",
            quotes: [
                "Cho mình mượn sách công nghệ?",
                "Sáng mai thứ 5 đi chạy bộ nha",
                "Sống tốt nhé cậu, cùng nhau thành công nhé !!!"
            ],
            finalLetter: "Thương à,\n\nCó những người vội bước qua nhau như cơn gió. Nhưng chúng ta đã may mắn có những kỉ niệm thời học sinh, những khoảnh khắc đó sẽ còn được ghi nhớ mãi trong kí ức của mỗi đứa. Thành công nhé đồng run của tui!!!\n\nKý tên: Minh Trí ."
        },

        "Trí trêu Ny Quỳnh": {
            name: "Ny Quỳnh",
            // Link ảnh: có thể là tên file ảnh (nằm chung thư mục) hoặc link trên mạng
            image: "anh/nyquynh.jpg",
            message: "Gửi Ny Quỳnh nha!\n\n Để quen biết đc Ny Quỳnh thì quả thật cũng thú vị. Hồi trước còn thân Nguyên thì t hay lấy điện thoại thèn Nguyên để đi chọc gái. Thì thấy nó hay nhắn tin với cậu nên tớ lấy điện thoại chọc cậu xí. Ai ngờ nó tiết lộ tên tui cái cậu tìm được hẳn cái facebook của tui luôn. Từ đó mới có cái chũi tiktok dài dài với cuộc gặp tại hội trại trường Nguyễn Trãi nữa chứ. Ta biết là m là một cô gái dễ thương, giỏi thể thao nè. Cảm ơn vì đã là một phần trong thanh xuân của Trí nha. \n\n Sau kì thi đại học dù kết quả có như thế nào, có tốt hay xấu thì hãy nhớ chăm sóc thật tốt cho bản thân nhé. Tận hưởng trọn vẹn mùa hè để có thể tiến vào đại học căng thẳng phía trước. Chúc chúng ta, mỗi người sẽ thành công trên con đường riêng mà mình chọn nhé. Thành công nhé bạn tui !!!!!",
            quotes: [
                "Những lần mượn nick Nguyên giỡn với cậu",
                "lập chũi tiktok hong",
                "Sống tốt nhé cậu, cùng nhau thành công nhé !!!"
            ],
            finalLetter: "Ny Quỳnh à,\n\nCó những người vội bước qua nhau như cơn gió. Nhưng chúng ta đã may mắn có những kỉ niệm đẹp thời học sinh, những khoảnh khắc đó sẽ còn được ghi nhớ mãi trong kí ức của mỗi đứa. Thành công nhé bạn của tui!!!\n\nKý tên: Minh Trí ."
        },

        "Hạc con deth Phương Thuỳ": {
            name: "Phương Thuỳ",
            // Link ảnh: có thể là tên file ảnh (nằm chung thư mục) hoặc link trên mạng
            image: "anh/phuongthuy.jpg",
            message: "Gửi Phương Thuỳ nha!\n\n Để quen biết được Phương Thuỳ cũng là hành trình dài ha, xưa lớp 10 thấy cậu hay chơi với Bội Trâm nè, cũng biết biết đó, sau đó vô Hạc mới được nọi chuyện với Thuỳ nhiều hơn nè. Thuỳ là một cô gái siu dễ thương và gần gũi với bạn bè luôn. Đặc biệt điều tui ấn tượng là Thuỳ có giọng nói nhẹ nhàng, điều tớ rất ấn tượng luôn, cùng với đó là quá nhiều hoa tay luôn nè. Những lần sinh hoạt clb, lâu lâu lại hay ngắm m, thông cảm cho ta nghe kkkk. Nói chứ sắp tới có học ở đâu thì nếu có khó khăn gì thì hãy điện ta 1 tiếng nhe, tui sẽ sẵn sàng giúp đỡ bạn đó hihi. \n\n Mấy nay chắc m áp lực với điểm thi thpt lắm đúng k. Nhưng mà đây là mùa hè rất giá trị đó, hãy sống cho thật đáng mùa hè rồi chúng ta cùng bước vào giảng đường đại học với bao khó khăn trước mắt nha. Thành công nhé bạn tui, quý lắm đó. Cảm ơn vì ngồi nghe những câu chuyện tình yêu hơi xàm xàm của tui hihihihi ^^",
            quotes: [
                "Những lần nói chuyện chọc nhau",
                "Những lần call video nói chuyện say sưa",
                "Sống tốt nhé cậu, cùng nhau thành công nhé !!!"
            ],
            finalLetter: "Phương Thuỳ à,\n\nCó những người vội bước qua nhau như cơn gió. Nhưng chúng ta đã may mắn có những kỉ niệm đẹp thời học sinh, những khoảnh khắc đó sẽ còn được ghi nhớ mãi trong kí ức của mỗi đứa. Thành công nhé bạn của tui!!!\n\nKý tên: Minh Trí ."
        },

        "Hạc con siu deth Uyển Nhi": {
            name: "Uyển Nhi",
            // Link ảnh: có thể là tên file ảnh (nằm chung thư mục) hoặc link trên mạng
            image: "anh/uyennhi.jpg",
            message: "Gửi Uyển Nhi nha!\n\nTừ những ngày đầu lớp 10, bạn Uyển Nhi đã rất nổi trong T1K12 luôn ròi, tớ còn nhớ hồi đó cậu tham gia Hạc rồi còn đi thi toán miền Bắc nữa chứ, cảm giác cậu rất là giỏi luôn nè. Sau đó lớp 11 vô được Hạc thì tớ thấy cậu rất thân thiện gần gũi luôn ớ. Cậu giống như một mẫu người lí tưởng của nhiều bạn nam lắm nè. Thực sự là cậu rất tốt luôn đó, không có điểm gì để chê ở cậu luôn. Cậu luôn mang đến cho tớ cảm giác rất là tích cực khi được nói chuyện với cậu nè. Chặng đường cấp 3 quả thật quá ngắn và còn nhiều vấn vương nhỉ \n\n Sau kì thi đại học cùng với điểm VACT cao ngất thì tớ biết cậu đã chọn được ngôi trường phù hợp ở HCM ròi nhỉ. Dù có ra sao thì hãy mạnh mẽ, phát triển và đạt đến được những thành công mà bản thân hằng mong ước nhé cậu. Thành công nhé cậu, cảm ơn vì đã xuất hiện trong hành trình thanh xuân của tớ nè ^^",
            quotes: [
                "Những lần làm quà 20/11",
                "Những lần sinh hoạt CLB",
                "Sống tốt nhé cậu, cùng nhau thành công nhé !!!"
            ],
            finalLetter: "Uyển Nhi à,\n\nCó những người vội bước qua nhau như cơn gió. Nhưng chúng ta đã may mắn có những kỉ niệm đẹp thời học sinh, những khoảnh khắc đó sẽ còn được ghi nhớ mãi trong kí ức của mỗi đứa. Thành công nhé bạn của tui!!!\n\nKý tên: Minh Trí ."
        },

        "Thanh Huy bạn tốt của tui": {
            name: "Thanh Huy",
            // Link ảnh: có thể là tên file ảnh (nằm chung thư mục) hoặc link trên mạng
            image: "anh/thanhhuy.jpg",
            message: "Gửi bạn tui Thanh Huy nha!\n\n Tính ra từ ngay cấp 1 tụi mình đã có cơ hội chơi chung với nhau từ hồi lớp 5 rồi nhỉ. T còn nhớ hồi đó cậu chuyển tới học thì t với cậu cùng chơi và đam mê rubik vô cùng luôn. Hồi nào cũng gạ solo rubik, nghĩ tới hồi đó kỉ niệm lại ùa về nhỉ. Mới đó nhanh thật, thời gian cậu ở NBK, còn tui ở KĐong cũng dần quên đi kỉ niệm cũ rồi nhỉ. Lúc cậu IB cho tui lớp 7, tui cũng không biết cậu là ai luôn kkkk. Sau đó 2 đứa cũng hỏi thăm nhau nhưnng mà không có nhiều lắm nhỉ. Mãi lên khi đi học chung Tiếng Anh, hai đứa mới nói chuyện nhiều hơn, tâm sự nhiều hơn. Có nhìu niềm vui, nỗi buồn cùng nhau. Bao nhiêu kí ức đó ta sẽ còn nhớ mãi đấy. Đặc biệt là lớp 12 này, ta vs m cũng nch với nhau nhiều, đi chơi nhiều nè, chạy bộ rồi đạp xe,... Cũng đáng nhớ ha, cũng vui ha. Tính cách m cx khá trưởng thành đó, chúc cậu sẽ thành công với tình yêu đời mình nha. \n\n Sắp đến thì không biết lựa chọn m như thế nào nhưng hãy kiên quyết và tự tin với lựa chọn của mình nhé. Chặng đường đại học sẽ khá chông gai nhưng không có gì khó, hãy kiên trì với mục tiêu của bản thân. Rồi một ngày nào đó lại hẹn đạp xe rồi đi chơi chung kkkk. Cảm ơn vì đã là một phần thanh xuân đáng nhớ của t ^^",
            quotes: [
                "Những lần học chung",
                "Những lần đạp xe ăn sáng chung",
                "Sống tốt nhé cậu, cùng nhau thành công nhé !!!"
            ],
            finalLetter: "Thanh Huy à,\n\nCó những người vội bước qua nhau như cơn gió. Nhưng chúng ta đã may mắn có những kỉ niệm đẹp thời học sinh, những khoảnh khắc đó sẽ còn được ghi nhớ mãi trong kí ức của mỗi đứa. Thành công nhé bạn của tui!!!\n\nKý tên: Minh Trí ."
        },

        "Bạn tốt 3 cấp của Trí và trùm crypto": {
            name: "Anh Khoa",
            image: "anh/anhkhoa.jpg",
            message: "Gửi bạn tui Anh Khoa,\n\n Từ hồi cấp 1, tui với cậu cũng đã biết nhau rồi nhỉ, cũng chơi chung đồ đó. Hồi đó thì còn nhỏ cũng chỉ biết vài thứ rồi chia sẻ chơi game với nhau thoi. Sang cấp 2 thì t với m lại tiếp tục chung lớp, cũng chơi chung nói chuyện cũng nhiều nè. Hồi cấp 2 thì t khá là nhát, cũng ít nói, nên cũng chưa có kỉ niệm gì nhiều lắm, chắc điều vui nhất với đáng nhớ là hồi đi Huế hồi lớp 9 nhỉ, hồi đó cậu với tui với cậu Minh Lê chung phòng, đi chơi rồi chụp ảnh với nhau các kiểu, cũng vui thật sự. Sang năm cấp 3 thì tui với cậu lại tiếp tục chung trường nhưng chỉ là không chung lớp, rồi cũng chả liên lạc gì với nhau nhiều đâu nhỉ. Sang lớp 11 thì tui đi dự khai giảng như bình thường thì gặp cậu, xong cậu hỏi tui nhiều kiến thức, xong tui cũng tò mò về tìm hiểu về crypto thử. Thời gian đầu nhiều cái tui bất ngờ thì hỏi cậu khá là nhiều nè. Cậu cũng chịu khó trả lời tui khá là nhiệt tình kkk. Khoảng thời gian đó nch cũng cảm ơn cậu nhiều lắm, giúp Trí mở mang tầm mắt và đem lại nguồn thu nhập thụ động cho bản thân, khá là ổn áp hihi. Cảm ơn cậu vì những lần đã giúp đỡ t nhaaaa. AI ra đời rồi những dự án crypto cũng lụi tàn dần theo, khi nào có mảng nào hợp lí, ổn ổn, anh em mình lại tương trợ phát triển tiếp nhe! \n\n Hành trình sắp tới 2 đứa có lẽ khá là xa cách khi mà đứa HCM, đứa thì ĐN, nhưng nhớ là hãy kiên định, theo đuổi đam mê và khát vọng của bản thân nhé. Sau này nhớ đừng quên thèn bạn này nhé. Nhớ lắm đó bạn tui, cũng cảm ơn vì đã tạo nên những nét thanh xuân đặc sắc của t trên hành trình trưởng thành và lớn lên nhé. Cảm ơn vì tất cả ^^",
            quotes: [
                "Vì sao nó airdrop vậy m",
                "Có kèo ni nè, m làm không",
                "Đi chơi Huế hồi lớp 9"
            ],
            finalLetter: "Anh Khoa à,\n\nCó những người vội bước qua nhau như cơn gió. Nhưng chúng ta đã may mắn có những kỉ niệm đẹp thời học sinh, những khoảnh khắc đó sẽ còn được ghi nhớ mãi trong kí ức của mỗi đứa. Thành công nhé bạn của tui!!!\n\nKý tên: Minh Trí ."
        },

        "Hoàng Châu mê cún": {
            name: "Hoàng Châu",
            image: "anh/hoangchau.jpg",
            message: "Gửi Châu nha,\n\n Đọc được lưu bút này chắc e cũng khá bất ngờ ha, vì sẽ không biết a sẽ chuẩn bị lưu bút ngược lại cho em nè. Hồi xưa lúc a add fr em, cũng thấy e khá là deth, nên hè 12 anh có rảnh nhắn với em, kkk thời gian đầu cx khá là vui nhỉ, nma khúc sau thì a lỡ để ý e nên có gì thông cảm bỏ qua cho anh nhe. Một chút tâm sự tuổi học trò cũng đủ khiến 2 anh em kết nối với nhau và để lại những ấn tượng tốt với nhau nè. Với anh, em rất là thương mấy bé cún, cưng chiều vô cùng, tính cách cũng dễ thương nữa. Tuy gặp nhiều khó khăn về các mối quan hệ xung quanh nhưng em vẫn vượt qua và sống tốt với phiên bản hiện tại của bản thân nhỉ. Chặng đường cấp 3 sắp khép lại rồi đấy. Nhớ là ôn bài cho thật kĩ nè, kỳ thi THPT rất quan trọng đấy nhé. Cùng với đó là hãy sống trọn vẹn những phút giây còn là học sinh với lớp nhé. Sau nì ra trường nhớ lắm đấy \n\n Đó là những lời tâm sự của anh thoi, cảm ơn e vì tờ lưu bút, vì những kỉ niệm thời học sinh nhé. Dù hành trình tương lai có như thế nào thì hãy nhớ sống tốt với phiên bản của mình nhé. Nhớ yêu thương ba mẹ nhiều hơn nè, và cảm ơn vì đã là một phần trong thanh xuân của anh nè. Cảm ơn vì tất cả ^^",
            quotes: [
                "Mai chơi gì vui vậy e",
                "Viết lưu bút cho anh nhe",
                "Tán gẫu, tâm sự chuyện cá nhân kkkk"
            ],
            finalLetter: "Châu à,\n\nCó những người vội bước qua nhau như cơn gió. Nhưng chúng ta đã may mắn có những kỉ niệm đẹp thời học sinh, những khoảnh khắc đó sẽ còn được ghi nhớ mãi trong kí ức của mỗi đứa. Thành công nhé em gái a!!!\n\nKý tên: Minh Trí ."
        },

        "Deskmate Hoá 11 của Trí": {
            name: "Thảo",
            image: "anh/vothao.jpg",
            message: "Gửi bạn Thảo nha,\n\n Từ hồi vô học hoá năm lớp 11, tui mới dô ngồi chung với Như Quỳnh T1, nhưng mà bạn đó lạnh lùng quá, nên tui quyết định đổi chỗ lên chỗ cậu. Cậu lại đồng ý cho tui lên ngồi chung mới hay chứ. Hồi đó thì cậu khá là hướng nội ha, và bây giờ vẫn vậy kkkk. Cậu có một tính cách khá nhẹ nhàng, tâm hướng Phật nè. Cậu lúc đó rất chịu lắng nghe Trí kể chuyện luôn, bao nhiêu câu chuyện trên trời dưới đất đều được cậu nghe mà không một lời than phiền luôn. Cậu luôn tương tác với nhưng câu chuyện ba láp ba xàm của Trí nữa chứ. Quý lắm luôn đó, hồi đó tới hồi kiểm tra Hoá thì 2 đứa nhìn nhau cười khà khà, vì không biết làm, xong phát xuống thì y như rằng là thấp điểm =)))). Nói chứ thời gian trôi qua cũng nhanh ha, mới hồi 11 đó mà chừ mỗi đứa đều tốt nghiệp và lựa chọn được cho mình một lối đi mới với hành trình mới \n\n Thi đại học xong rồi trong lòng cảm thấy gì hong. Đây là mùa hè tuyệt lắm đấy, nhớ hãy tận hưởng trọn vẹn mùa hè này nha. Và đừng quên chuẩn bị hành trang thật vững chắc để đạt được những khát vọng bản thân, lí tưởng mà bản thân hướng tới nhé. Cuối cùng thì cảm ơn vì đã xuất hiện trong thanh xuân của Trí nha, cảm ơn vì tất cả nè ^^",
            quotes: [
                "Những lần học hoá xàm hết tiết",
                "Những lần ngồi học cười nguyên tiết",
                "Những lần kiểm tra không biết gì hết :D"
            ],
            finalLetter: "Thảo à,\n\nCó những người vội bước qua nhau như cơn gió. Nhưng chúng ta đã may mắn có những kỉ niệm đẹp thời học sinh, những khoảnh khắc đó sẽ còn được ghi nhớ mãi trong kí ức của mỗi đứa. Thành công nhé bạn của tui!!!\n\nKý tên: Minh Trí ."
        },

        "em gái rụt Thục Nhi": {
            name: "Thục Nhi",
            image: "anh/thucnhi.jpg",
            message: "Gửi Thục Nhi đứa em mà anh rất quý,\n\n Có lẽ ngay từ những ngày cùng hoạt động chung gen 3 thì anh với em đôi người xa lạ nhỉ. Cũng chả quen biết gì nhau, cũng chả để ý gì, cũng chả có dịp để gặp mặt nhau nữa nhỉ. Lúc đó là sinh nhật em, thì thấy em chung câu lạc bộ anh cũng đi chúc sinh nhật thế thoi. Mãi đến lúc bonding câu lạc bộ gen 4, lúc đó mới biết và nói chuyện với em nhiều hơn. Thật sự do lúc đó, a đi soi nhỏ nào đứng chụp ảnh bonding bên cạnh mình vậy tarrr, à thì ra là nhỏ Nhi =))). Xong mới có nhiều kỉ niệm nhắn tin, tâm sự quên lối về giữa em với anh =))). Nói vui vậy thoi chứ thấy em là một người siu tâm huyết với câu lạc bộ nè, tính tình deth, cũng hay đùa giỡn với anh, có những câu nói như 'Anh Tríiiiiii' trước mấy đứa bạn anh mà anh ngại với bạn anhhhh chết đi được kkkkk. Ni gọi là làm nũng với anh nè. Nói chứ thời gian thấm thoát thôi đưa, sắp tới anh lên đại học rồi, cũng nhớ lắm mấy lần nhỏ kêu 'anh Trí' kkk. Cũng vui vì được đàn em quý mến nè. Hồi xưa lúc em thi lí 3đ mà em tự hào đi khoe anh quá trời, tròi oi, tuy hơi hơi mệt nhưng mà lúc đó cx vui lắm, vì e mang đến cho anh một sự tích cực, niềm vui lạ lắm. Nếu cho phép anh được quay lại thời 12, thì anh sẽ tận hưởng trọn vẹn từng khoảnh khắc mà anh với em gái được nói chuyện và cười đùa với nhau. \n\n Hành trình tương lai sẽ rất ít có cơ hội gần nhau nè, những kỉ niệm đẹp mà em ở lớp 11 và anh ở lớp 12 cùng đi qua sẽ là những mảnh kí ức tươi đẹp nhất của tuổi học sinh đặc biệt là trong câu lạc bộ mà anh rất yêu quý. Mong rằng tương lai e sẽ sống tốt, và toả sáng với phiên bản tuyệt vời nhất của bản thân em nhé. Hẹn một cuộc đi chơi ngẫu hứng vào một ngày không xa và cuối cùng thì cảm ơn đã xuất hiện trong thanh xuân của anh, cảm ơn vì tất cả ^^",
            quotes: [
                "Những đêm tâm sự chuyện tình cảm",
                "Hồi đi Đà Nẵng, chở e về, tâm sự đủ thứ",
                "Anh Trí bạn đó bắt nạt em"
            ],
            finalLetter: "Nhi à,\n\nCó những người vội bước qua nhau như cơn gió. Nhưng chúng ta đã may mắn có những kỉ niệm đẹp thời học sinh, những khoảnh khắc đó sẽ còn được ghi nhớ mãi trong kí ức của anh và em. Tận hưởng trọn vẹn thanh xuân cấp 3 nhé em gái!!!\n\nKý tên: Minh Trí ."
        },

        "Người bạn Trí ngưỡng mộ": {
            name: "Minh Phương",
            image: "anh/minhphuong.jpg",
            message: "Gửi Minh Phương nhe,\n\n Từ những ngày đầu cấp 2, cậu đã nổi lên trong trường Kim Đồng ròi, và tớ cũng chỉ là một hạt cát bé giữa sa mạc. Nhìn mọi người toả sáng, còn mình loi doi với thứ ánh sáng nhỏ bé hihi. Hồi đó, tớ cx không nghĩ tương lai có thể làm bạn với cậu đâu hihi. Mãi lên cấp 3 được đi thi riêng, được làm bài chung với cậu, được nói chuyện nhiều hơn, khi đó mới có một người bạn như bây h. Thời gian thấm thoát thôi đưa, cậu cũng lớn r, cũng trưởng thành rồi. Cũng có cho mình một lựa chọn hợp lí ròi. Nhưng mà đừng quên những kỉ niệm đẹp với nhau nhe. Đặc biệt là hôm cậu rủ tớ qua nhà nhưng mà đi bộ 4km r dề, dề xong còn bị mưa phải đi taxi về. Nhớ lại cx vui với đáng nhớ thật. Cơn mưa bất chợt đó đã kéo dài cuộc nói chuyện tới tận 7h tối :D. Nói vậy thoi, cảm ơn vì từng là một người bạn mà Trí rất ngưỡng mộ và rất quý nè \n\n Hè này nhớ luyện tập thể thao thường xuyên để có một sức khoẻ tốt như Trí nha. Hãy nhớ dù hành trình tương lai có khó khăn, có gian lao, thì hãy giữ cho mình một ngọn lửa khát vọng, đạt tới những vinh quang mà mình hằng ao ước nha. Cuối cùng thì cảm ơn vì đã là một phần thanh xuân tươi đẹp của Trí, cảm ơn vì tất cả ^^",
            quotes: [
                "Những lần chạy bộ chung",
                "Những lần nói chuyện chung",
                "Những lần nhìn cậu toả sáng"
            ],
            finalLetter: "Minh Phương à,\n\nCó những người vội bước qua nhau như cơn gió. Nhưng chúng ta đã may mắn có những kỉ niệm đẹp thời học sinh, những khoảnh khắc đó sẽ còn được ghi nhớ mãi trong kí ức của mỗi đứa. Thành công nhé bạn của tui!!!\n\nKý tên: Minh Trí ."
        },

        "Phương Nhi gơ thể thao": {
            name: "Phương Nhi",
            image: "anh/phuongnhi.jpg",
            message: "Gửi bạn tui Phương Nhi,\n\n Mới dô lớp 10, ngày nào cũng rảnh nên Trí hay ra nhà đa năng đánh cầu lông nè. Thì lại được gặp cậu và được solo với cậu kkk. Trình Trí thì cũng gà gà ngang cậu thoi kkk. Cũng đánh cầu lông, cũng chào hỏi đồ đó. Sau đó mới kết bạn và rủ nhau chơi cầu lông nhiều hơn. Nhiều lần rủ, nhiều lần chơi, nhiều lần nấu xói =)))). Nhắc nhớ sơ vậy thoi nè. Sang 11 thì 2 đứa lại chung CLB, lại nghe cậu than vãn CLB hơi nhiều kkk, được cái là lúc đó cậu khá là năng nổ, làm việc hết mình vì CLB. Theo Trí thì Nhi là cô gái rất là giỏi nè, một gơ thể thao chính hiệu, một người bạn gắn bó khá thân thiết với Trí năm lớp 10,11 nữa nè. Trí nhớ có nhiều lúc cậu call video với Trí mà chia sẻ đủ thứ chuyện hết. Cũng đáng nhớ ha, nhắc đến kỉ niệm 2 đứa thì tâm sự nhiều, nói chuyện nhiều, đánh cầu lông nhiều rồi cùng đạt huy chương khpd nữa chứ. Tất cả những thứ đó không biết Nhi còn nhớ hong, hay đã quên ròi, Trí còn nhớ rõ lắm đó hihi. \n\n Sắp tới là chặng đường đại học đầy gian lao và khó khăn. Trí biết Nhi đã chọn được cho mình con đường đại học riêng. Hy vọng nơi đó sẽ là khởi đầu mới đầy thuận lợi với Nhi, đừng quên người bạn từng chơi chung năm cấp 3 này nhé. Cuối cùng thì cảm ơn đã xuất hiện trong thanh xuân của Trí,  cảm ơn vì từng đồng hành cùng nhau với những kỉ niệm tươi đẹp nhất của tuổi học trò, cảm ơn vì tất cả ^^",
            quotes: [
                "Những lần đánh cầu lông chung",
                "Những lần cùng đeo huy chương chạy bộ hội khoẻ phù đổng",
                "Những lần call video nói chuyện quá trời"
            ],
            finalLetter: "Phương Nhi à,\n\nCó những người vội bước qua nhau như cơn gió. Nhưng chúng ta đã may mắn có những kỉ niệm đẹp thời học sinh, những khoảnh khắc đó sẽ còn được ghi nhớ mãi trong kí ức của mỗi đứa. Thành công nhé bạn của tui!!!\n\nKý tên: Minh Trí ."
        },

        "Văn Dương đệ ruột a Trí": {
            name: "Văn Dương",
            image: "anh/vanduong.jpg",
            message: "Gửi thèn em Văn Dương,\n\n Không ngờ là anh lại có lưu bút ngược lại cho em đk kkk. Từ ngày mới vô trường thấy thèn em khá nổi tiếng khi luôn thấy em xuất hiện ở mọi sự kiện của trường. Không tưởng được thèn em đó với anh Trí có thể thân thiết với nhau như vậy nhỉ. Từ hồi 12, 2 anh em cùng nhau đi tình nguyện hè nè. Cùng với đó vô năm gắn bó với nhau các các cuộc thi khác nhau nhỉ. Từng đợt trò chuyện, nói chuyện tình cảm nè, cùng đi chơi tết nè, tóm chuyện quên lối về các kiểu nè. Nói chung cũng vui nhỉ. Câu chuyện đáng nhớ nhất chắc là những lúc anh em mình tám chuyện tình cảm quá trời, từng câu chuyện kể nhau nghe, cho nhau những bài học hay, những câu chuyện tình cảm tuy hơi trẻ con nhưng nó là cả thanh xuân của mỗi đứa nhỉ, từng lần dự thi cuộc thi AI chung, nhưng mà anh gánh hơi nhiều đó nhé kkkk \n\n Nói vậy thoi chứ cảm ơn vì đã là thanh xuân tuyệt vời của anh. Hy vọng trong tương lai có dịp để ae mình có thể cùng nhau tham dự cuộc thi gì đó hoặc là cái hẹn đi chơi bất ngờ nhỉ. Cuối cùng thì cảm ơn đã xuất hiện trong thanh xuân của anh, cảm ơn vì tất cả kkkk ^^",
            quotes: [
                "Tâm sự chuyện tình cảm",
                "Đi thi nhiều cuộc thi",
                "Đi tình nguyện hè"
            ],
            finalLetter: "Dương à,\n\nCó những người vội bước qua nhau như cơn gió. Nhưng chúng ta đã may mắn có những kỉ niệm đẹp thời học sinh, những khoảnh khắc đó sẽ còn được ghi nhớ mãi trong kí ức của anh và em. Tận hưởng trọn vẹn thanh xuân cấp 3 nhé em zai!!!\n\nKý tên: Minh Trí ."
        },

        "Em gái ruột Hà Linh": {
            name: "Hà Linh",
            image: "anh/halinh.jpg",
            message: "Gửi em gái Hà Linh mà anh rất quý,\n\n Không ngờ là anh lại có lưu bút ngược lại cho e gái đâu đúng k. Từ ngày mà casting CLB về, tự nhiên thấy em gửi lời kết bạn cho anh. Anh cx tò mò đi soi thì thấy em cũng dễ thương nè, cũng nhẹ nhàng giống gu anh vậy kkk. Sau đó vô CLB rồi thì ae mình lại có biết bao dịp gắn bó cùng nhau, hỏi thăm nhau nhỉ. Nhưng mà gắn bó nhất là qua những câu chuyện tâm sự quên lối về giữa đêm nhỉ. Lúc màng đêm buông xuống, tâm hồn ta hay bộc lộ nhiều cảm xúc lắm nè. Em tâm sự với anh quá nhiều chuyện luôn. Anh luôn lắng nghe nè, cũng góp ý cho em gái, cũng cảm thấy quý lắm vì được đàn em chia sẻ, tin tưởng đến vậy luôn. Kỉ niệm với anh lớn nhất có lẽ là những lần anh bày tin cho em học nhỉ, cũng hướng dẫn em các kiểu, nch là được gắn bó với em làm anh nhớ lắm đó. Còn nhớ những lúc em suy vì người cũ, xong anh khuyên quá trời luôn nè. Hãy nhớ rằng không ai được phép làm tổn thương trái tim của em gái anh đâu nhé. Bất kì ai làm gì em thì hãy kể với anh nhe, nhớ nha, a giải quyết cho kkk. Giỡn vui v thoi chứ tgian trôi nhanh nhỉ, 1 năm vừa rồi gắn bó với trg Lê có nhiều niềm vui nỗi buồn nhỉ. Nhưng đó cũng chưa là gì đâu, sang 11,12 em sẽ trưởng thành hơn so với em năm lớp 10 đó. Khi đó chắc em cx quên người anh đã gắn bó với em năm lớp 10 ròi nhỉ kkk. Anh sẽ gửi lưu bút online đây, để khi nào em k còn nhớ người anh này thì mở ra đọc nhen. \n\n Hành trình cấp 3 còn dài lắm đó, nhớ trân trọng từng phút giây nhé. Hãy nhớ làm tốt bổn phận của phó HR thay anh nha, cái gì CLB k ổn thì góp ý giúp anh, nếu k làm gì được thì nhắn anh một tiếng để anh xử lí nha. Một người tốt như em xứng đáng sẽ có một tương lai sáng với bao hoài bão phía trước. Cuối cùng thì cảm ơn đã xuất hiện trong thanh xuân đáng nhớ của anh nha, cảm ơn vì tất cả hihi ^^",
            quotes: [
                "Những lần tâm sự chuyện tình cảm",
                "Anh Trí bày em ôn tin với",
                "Anh Trí cho em gửi lưu bút"
            ],
            finalLetter: "Linh à,\n\nCó những người vội bước qua nhau như cơn gió. Nhưng chúng ta đã may mắn có những kỉ niệm đẹp thời học sinh, những khoảnh khắc đó sẽ còn được ghi nhớ mãi trong kí ức của anh và em. Tận hưởng trọn vẹn thanh xuân cấp 3 nhé em gái!!!\n\nKý tên: Minh Trí ."
        },

        "Bảo Thy head HR": {
            name: "Bảo Thy",
            image: "anh/baothy.jpg",
            message: "Gửi em gái Bảo Thy,\n\n Không ngờ là anh lại có lưu bút ngược lại cho e đâu đúng không. Thực ra anh đã biết e ngay từ cấp 2, khi mà mẹ em đi kết bạn dạo và kb với a. Xong anh cx chả để ý cho tới khi thấy em đi casting CLB. Cái vô đúng cái ban của anh nữa chứ. Cũng bất ngờ lắm kkk, cũng thấy à con bé ni khá nghiêm túc nè, khả năng vô ban mình cũng làm ra được việc phết, công nhận là vậy thật. Minh chứng là chức trưởng ban HR đã thể hiện rõ điều đó nè. Kỉ niệm đáng nhớ chắc là chuyến đi chơi mì ăn liền khi cái team thiếu người và bù anh vô haaa kkkk. Cũng vui vì anh ít đi chơi lắm, được rủ đi chơi, được hú hét cùng đàn em là kỉ niệm không thể quên với anh đâu hihi. Hy vọng lại có dịp có những chuyến đi chơi ngẫu hứng như vậy nữa ha, hy vọng là vậy. \n\n Năm ni cũng sang 12 ròi, cũng sắp kết thúc hành trình thanh xuân rồi đấy, nhớ trân trọng từng phút giây khi còn là học sinh nha, sau này lại tốt nghiệp lại buồn lắm đấy hihi. Nhớ ôn thi THPT cho thật tốt nè. Cuối cùng thì cảm ơn em đã là một phần thanh xuân đáng nhớ của anh, cảm ơn vì tất cả ^^",
            quotes: [
                "Đi chơi ngẫu hứng dịp tết",
                "Những lần deadline dí",
                "Những lần sinh hoạt CLB"
            ],
            finalLetter: "Thy à,\n\nCó những người vội bước qua nhau như cơn gió. Nhưng chúng ta đã may mắn có những kỉ niệm đẹp thời học sinh, những khoảnh khắc đó sẽ còn được ghi nhớ mãi trong kí ức của anh và em. Tận hưởng trọn vẹn thanh xuân cấp 3 nhé em gái!!!\n\nKý tên: Minh Trí ."
        },

        // --- BẠN CÓ THỂ THÊM NGƯỜI THỨ 2 VÀO DƯỚI NÀY BẰNG CÁCH XÓA 2 DẤU GẠCH CHÉO // ĐẦU DÒNG ---
        // "mot_id_khac_vi_du": {
        //     name: "Tên Bạn Khác",
        //     image: "anh/anh_ban_khac.jpg",
        //     message: "Gửi Bạn Khác,\n\nChỗ này để viết đoạn giới thiệu...",
        //     quotes: [
        //         "Kỷ niệm số 1...",
        //         "Kỷ niệm số 2...",
        //         "Kỷ niệm số 3..."
        //     ],
        //     finalLetter: "Thư cuối gửi bạn khác..."
        // },
    };

    let currentPersonData = null;

    // Dom Elements
    const btnStart = document.getElementById("btn-start");
    const btnUnlock = document.getElementById("btn-unlock");
    const btnNextGame = document.getElementById("btn-next-game");
    const idInput = document.getElementById("id-input");
    const errorMsg = document.getElementById("error-msg");
    const bgMusic = document.getElementById("bg-music");

    const step1 = document.getElementById("step-1");
    const step2 = document.getElementById("step-2");
    const step3 = document.getElementById("step-3");
    const step4 = document.getElementById("step-4");

    // Khởi tạo hiệu ứng các hạt lấp lánh bay phấp phới ở nền
    initParticles();

    // Bước 1 -> Bước 2
    btnStart.addEventListener("click", () => {
        step1.classList.remove("active");
        step2.classList.add("active");
    });

    // Bước 2 -> Bước 3: Xác thực ID định danh và phát nhạc nền đồng thời
    btnUnlock.addEventListener("click", () => {
        const rawInput = idInput.value.trim();

        // Hàm chuẩn hóa tiếng Việt: bỏ dấu, đưa về chữ thường, xóa khoảng trắng thừa
        const normalizeText = (text) => {
            return text.normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .replace(/đ/g, "d").replace(/Đ/g, "D")
                .toLowerCase()
                .replace(/\s+/g, " ")
                .trim();
        };

        const searchId = normalizeText(rawInput);

        let foundId = null;
        for (const key in memoryDatabase) {
            if (normalizeText(key) === searchId) {
                foundId = key;
                break;
            }
        }

        if (foundId) {
            currentPersonData = memoryDatabase[foundId];
            errorMsg.style.display = "none";

            // Kích hoạt phát nhạc nền (Vượt qua rào cản chặn autoplay của trình duyệt nhờ click tương tác)
            bgMusic.play().catch(err => {
                console.log("Trình duyệt chặn phát nhạc tự động, sẽ thử lại ở bước bấm tiếp theo.");
            });

            // Gán dữ liệu tương ứng của người dùng
            document.getElementById("memory-title").innerText = `Ký ức cùng ${currentPersonData.name}`;
            document.getElementById("memory-img").src = currentPersonData.image;

            step2.classList.remove("active");
            step3.classList.add("active");

            // Bắt đầu hiệu ứng đánh chữ nghệ thuật độc đáo
            startTypewriter(currentPersonData.message);
        } else {
            // Hiển thị thông báo lỗi khi nhập sai ID
            errorMsg.style.display = "block";
            idInput.style.animation = "none";
            setTimeout(() => {
                idInput.style.animation = "shake 0.4s ease-in-out";
            }, 10);
        }
    });

    // Hàm xử lý hiệu ứng Typewriter sinh động
    function startTypewriter(text) {
        const container = document.getElementById("typewriter-text");
        container.innerText = "";
        let index = 0;

        function type() {
            if (index < text.length) {
                container.innerText += text.charAt(index);
                index++;
                setTimeout(type, 40); // Tốc độ đánh chữ (ms/ký tự)
            } else {
                // Hiện nút chuyển bước tiếp theo sau khi chữ chạy xong hoàn toàn
                btnNextGame.style.display = "inline-block";
            }
        }
        type();
    }

    // Bước 3 -> Bước 4: Chuyển sang phần Game/Tương tác cảm xúc sâu sắc
    btnNextGame.addEventListener("click", () => {
        step3.classList.remove("active");
        step4.classList.add("active");
        setupInteractiveStars();

        // Thử phát lại nhạc một lần nữa để chắc chắn âm thanh đang hoạt động tốt
        bgMusic.play().catch(() => { });
    });

    // Bước 4: Logic khởi tạo hàng ngôi sao ký ức
    function setupInteractiveStars() {
        const starsContainer = document.getElementById("stars-container");
        starsContainer.innerHTML = "";

        if (!currentPersonData || !currentPersonData.quotes) return;

        let clickedStars = 0;
        let totalStars = currentPersonData.quotes.length;
        let starsState = new Array(totalStars).fill(false);

        currentPersonData.quotes.forEach((quote, idx) => {
            const star = document.createElement("span");
            star.className = "star";
            star.innerHTML = "★";

            star.addEventListener("click", () => {
                // Thêm hiệu ứng lấp lánh cho ngôi sao vừa chọn và giữ nó sáng mãi
                star.classList.add("active");

                // Thay đổi nội dung câu nói hoài niệm kèm hiệu ứng làm mờ nhẹ
                const quoteText = document.getElementById("star-quote-text");
                quoteText.style.opacity = 0;
                setTimeout(() => {
                    quoteText.innerText = quote;
                    quoteText.style.opacity = 1;
                }, 200);

                if (!starsState[idx]) {
                    starsState[idx] = true;
                    clickedStars++;

                    // Nếu đã nhấn hết tất cả ngôi sao
                    if (clickedStars === totalStars) {
                        setTimeout(() => {
                            const finalSection = document.getElementById("final-letter-section");
                            finalSection.style.display = "block";
                            // Kích hoạt transition opacity
                            setTimeout(() => finalSection.style.opacity = 1, 100);
                        }, 1000);
                    }
                }
            });
            starsContainer.appendChild(star);
        });
    }

    // Cơ chế lật mở/đóng phong thư khi nhấp chuột vào
    const envelope = document.getElementById("envelope");
    let isEnvelopeOpened = false;

    envelope.addEventListener("click", () => {
        if (!isEnvelopeOpened) {
            isEnvelopeOpened = true;
            envelope.classList.add("open");
            document.getElementById("envelope-instruction").style.display = "none";

            // Gọi hàm đánh chữ cho thư cuối
            setTimeout(() => {
                startHandwriting(currentPersonData.finalLetter);
            }, 800);
        }
    });

    function startHandwriting(text) {
        const container = document.getElementById("final-letter-text");
        container.innerText = "";
        let index = 0;

        function type() {
            if (index < text.length) {
                container.innerText += text.charAt(index);
                index++;
                setTimeout(type, 50); // Tốc độ đánh chữ viết tay
            } else {
                setTimeout(() => {
                    const hugSection = document.getElementById("hug-section");
                    hugSection.style.display = "block";
                }, 500);
            }
        }
        type();
    }

    // Xử lý gửi Cái Ôm
    const btnHug = document.getElementById("btn-hug");
    const hugProgress = document.getElementById("hug-progress");
    const hugStatus = document.getElementById("hug-status");
    let hugTimer = null;
    let hugPercent = 0;
    let isHugSent = false;

    function startHug() {
        if (isHugSent) return;
        btnHug.classList.add("holding");
        btnHug.innerText = "❤️ Đang gửi...";

        hugTimer = setInterval(() => {
            hugPercent += 5; // Tăng 5% mỗi 150ms -> 3 giây = 100%
            hugProgress.style.width = hugPercent + "%";

            if (hugPercent >= 100) {
                completeHug();
            }
        }, 150);
    }

    function stopHug() {
        if (isHugSent) return;
        clearInterval(hugTimer);
        btnHug.classList.remove("holding");

        if (hugPercent < 100) {
            hugPercent = 0;
            hugProgress.style.width = "0%";
            btnHug.innerText = "❤️ Nhấn Giữ Để Gửi Cái Ôm";
        }
    }

    function completeHug() {
        clearInterval(hugTimer);
        isHugSent = true;
        btnHug.classList.remove("holding");
        btnHug.style.background = "rgba(255, 71, 87, 0.2)";
        btnHug.style.color = "#ff4757";
        btnHug.innerText = "❤️ Cái ôm đã được gửi đi!";
        btnHug.style.cursor = "default";
        hugStatus.innerText = "Trí đã nhận được cái ôm của cậu. Cảm ơn vì tất cả!";

        // =============== PHẦN THÊM MỚI ===============
        // Thay link bạn vừa copy ở Bước 3 vào giữa 2 dấu nháy kép bên dưới
        const scriptURL = "https://script.google.com/macros/s/AKfycbzSwr_1KndzVWjiLJxZHAGyio46E6RS1Yap5NO_UJ1W19jQDjD90TMaqFVP6cETa_I-/exec";

        // Lấy tên của người đang xem hiện tại
        const personName = currentPersonData ? currentPersonData.name : "Một người bạn ẩn danh";

        // Gửi ngầm dữ liệu lên Google Sheets
        fetch(`${scriptURL}?name=${encodeURIComponent(personName)}`, {
            method: 'GET',
            mode: 'no-cors' // Bỏ qua lỗi bảo mật CORS của trình duyệt
        })
            .then(() => {
                console.log("Đã gửi thành công cái ôm của", personName);
            })
            .catch(error => {
                console.error("Lỗi khi gửi:", error);
            });
        // ==============================================
    }

    btnHug.addEventListener("mousedown", startHug);
    btnHug.addEventListener("mouseup", stopHug);
    btnHug.addEventListener("mouseleave", stopHug);

    btnHug.addEventListener("touchstart", (e) => { e.preventDefault(); startHug(); });
    btnHug.addEventListener("touchend", stopHug);
    btnHug.addEventListener("touchcancel", stopHug);

    // Khởi tạo hiệu ứng các hạt lấp lánh (Nostalgic Spark Particles) trên Canvas nền
    function initParticles() {
        const canvas = document.getElementById("particle-canvas");
        const ctx = canvas.getContext("2d");
        let particles = [];

        function resize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        window.addEventListener("resize", resize);
        resize();

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height + canvas.height;
                this.size = Math.random() * 2 + 1;
                this.speedY = -(Math.random() * 0.7 + 0.2); // Bay chậm lên trên đầy hoài niệm
                this.speedX = Math.random() * 0.4 - 0.2;
                this.opacity = Math.random() * 0.6 + 0.2;
            }
            update() {
                this.y += this.speedY;
                this.x += this.speedX;
                if (this.y < 0) {
                    this.y = canvas.height;
                    this.x = Math.random() * canvas.width;
                }
            }
            draw() {
                ctx.fillStyle = `rgba(241, 196, 15, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        for (let i = 0; i < 45; i++) {
            particles.push(new Particle());
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            requestAnimationFrame(animate);
        }
        animate();
    }
});
