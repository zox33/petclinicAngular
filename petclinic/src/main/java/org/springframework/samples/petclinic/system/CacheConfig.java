package org.springframework.samples.petclinic.system;

import java.util.concurrent.TimeUnit;

import org.ehcache.config.CacheConfiguration;
import org.ehcache.config.builders.CacheConfigurationBuilder;
import org.ehcache.config.builders.ResourcePoolsBuilder;
import org.ehcache.config.units.EntryUnit;
import org.ehcache.expiry.Duration;
import org.ehcache.expiry.Expirations;
import org.ehcache.jsr107.Eh107Configuration;
import org.springframework.boot.autoconfigure.cache.JCacheManagerCustomizer;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.http.HttpMethod;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

/**
 * Cache could be disable in unit test.
 */
@Configuration
@EnableCaching
@Profile("production")
class CacheConfig {
	   @Bean
	    public JCacheManagerCustomizer cacheManagerCustomizer() {
	        return cacheManager -> {
	            CacheConfiguration<Object, Object> config = CacheConfigurationBuilder
	                .newCacheConfigurationBuilder(Object.class, Object.class,
	                    ResourcePoolsBuilder.newResourcePoolsBuilder()
	                        .heap(100, EntryUnit.ENTRIES))
	                .withExpiry(Expirations.timeToLiveExpiration(Duration.of(60, TimeUnit.SECONDS)))
	                .build();
	            cacheManager.createCache("vets", Eh107Configuration.fromEhcacheCacheConfiguration(config));
	        };
	    }
	   
	   
	       @Bean
	       public CorsConfigurationSource  corsFilter() {
	           CorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
	           CorsConfiguration config = new CorsConfiguration();
	           config.addAllowedOrigin("http://localhost:4200");
	           config.addAllowedMethod(HttpMethod.DELETE);
	           config.addAllowedMethod(HttpMethod.GET);
	           config.addAllowedMethod(HttpMethod.OPTIONS);
	           config.addAllowedMethod(HttpMethod.PUT);
	           config.addAllowedMethod(HttpMethod.POST);
	           
	           ((UrlBasedCorsConfigurationSource) source).registerCorsConfiguration("/**", config);
	           
	           return  source;
	       }
	
}