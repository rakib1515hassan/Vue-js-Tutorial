const { createApp } = Vue;

createApp({
    data() {
        return {
            name: "Md Rakib Hassan",
            work: "Python With Django",
            student: true,
            
            // Array
            skill: ["Python", "Django", "Vue"],

            // Object
            address: {
                jila: "Chandpur",
                division: "Chitogong",
                country: "Bangladesh"
            }
        };
    },
    methods: {
        experience() {
            return "Total 1 Year of Experience.";
        }
    }
}).mount('#info');
