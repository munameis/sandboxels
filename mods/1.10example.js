/* == Cheat Menu Mod for Sandboxels == */

// برمجة زر K لفتح القائمة
keybinds["KeyK"] = function() {
    // طلب اسم العنصر من المستخدم
    let itemName = prompt("أدخل اسم العنصر (مثال: wood, stone, fire):", "wood");
    
    if (itemName) {
        // التأكد من وجود العنصر في اللعبة
        if (elements[itemName]) {
            // طلب العدد
            let countInput = prompt("كم حبة تبي؟ (Count):", "10");
            let count = parseInt(countInput);

            if (!isNaN(count) && count > 0) {
                // إضافة العنصر للمخزن (Inventory) ليعمل في سرفايفل وغيره
                // نستخدم inventoryLayout لإضافة الكمية
                if (typeof inventory !== 'undefined') {
                    inventory[itemName] = (inventory[itemName] || 0) + count;
                    logMessage("تم إضافة " + count + " من " + itemName + " للمخزن!");
                } else {
                    // إذا كان اللعب في طور الكرييتف العادي
                    logMessage("تم اختيار " + itemName + " (أنت في طور الإبداع)");
                    currentElement = itemName;
                }
            } else {
                alert("العدد غير صحيح!");
            }
        } else {
            alert("هذا العنصر غير موجود! تأكد من الاسم بالإنجليزية.");
        }
    }
};

// رسالة ترحيبية عند تشغيل المود
runEveryTick(function() {
    if (pixelTicks === 1) {
        logMessage("مود القائمة السريعة جاهز! اضغط K للبدء.");
    }
});
