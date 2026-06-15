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
        // }
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
