const { createApp } = Vue;

createApp({
    data() {
        return {
            name: "Md Rakib Hassan",
            work: "Python With Django",
            student: true,
            
            // Array of skills
            skills: ["Python", "Django", "Vue"],

            // Object for address
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
