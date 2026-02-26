/* == Custom Category and Element Mod == */

// 1. إنشاء الفئة الجديدة في القائمة
if (!elementCategories.elmentz) {
    elementCategories.elmentz = [];
}

// 2. تعريف مادة gicer ووظيفتها
elements.gicer = {
    color: "#3498db",
    tool: function(pixel) {
        // نتركها فارغة لأننا سنعتمد على الضغط من القائمة
    },
    category: "elmentz",
    desc: "اضغط هنا لكتابة اسم العنصر الذي تريده",
};

// 3. تعديل سلوك الضغط على مادة gicer في القائمة
// نستخدم روتين مخصص عند اختيار المادة
runEveryTick(function() {
    if (currentElement === "gicer") {
        let itemName = prompt("Enter Element Name (e.g. wood, fire, stone):");
        
        if (itemName && elements[itemName]) {
            currentElement = itemName; // تحويل الأداة فوراً للعنصر المختار
            
            // إضافة كمية للمخزون إذا كنت في طور السرفايفل
            if (typeof inventory !== 'undefined') {
                inventory[itemName] = (inventory[itemName] || 0) + 10; 
            }
            
            logMessage("Switched to: " + itemName);
        } else if (itemName) {
            logMessage("Element not found!");
            currentElement = "pencil"; // العودة للقلم العادي إذا لم يجد العنصر
        } else {
            currentElement = "pencil";
        }
    }
});

// تحديث القائمة لإظهار الفئة الجديدة
updateUI();
